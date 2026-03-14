import path from 'path';
import fs from 'fs';
import { promisify } from 'util';
import glob from 'glob';
import ffmpeg from 'fluent-ffmpeg';

const globAsync = promisify(glob);

(async () => {
	try {
		// Find all MP4 files in the 'public' directory
		const files = await globAsync('public/**/*.mp4');
		const totalFiles = files.length;
		let processedFiles = 0;
		
		for (const file of files) {
			const { name, ext, dir } = path.parse(file);

			// Skip if the source file already ends with "_c"
			if (name.endsWith('_c')) {
				console.log(`Skipping (already compressed file): ${file}`);
				continue;
			}

			const relativeDir = path.relative('public', dir);
			const destinationDir = path.join('public', relativeDir);
			const compressedFile = path.join(destinationDir, `${name}_c${ext}`);

			// Skip if compressed version already exists
			if (fs.existsSync(compressedFile)) {
				console.log(`Skipping (already exists): ${compressedFile}`);
				continue;
			}

			console.log(`Compressing: ${file} -> ${compressedFile}`);

			await new Promise((resolve, reject) => {
				let totalFrames = 0;

				ffmpeg(file)
					.videoCodec('libx264')
					.audioCodec('aac')
					.outputOptions([
						'-crf 23',  // Adjusted for better quality
						'-preset medium', // Balanced between speed and quality
						'-b:v 2000k', // Increased bitrate for better quality
						'-maxrate 2500k',
						'-bufsize 5000k',
						'-vf scale=-2:1080', // Scale to 1080p
						'-b:a 192k' // Increased audio bitrate
					])
					.on('codecData', (data) => {
						totalFrames = parseInt(
							data.duration
								.split(':')
								.reduce((acc, time) => (60 * acc) + +time) * 30,
							10
						);
					})
					.on('progress', (progress) => {
						if (totalFrames) {
							const percentage = ((progress.frames / totalFrames) * 100).toFixed(2);
							process.stdout.write(`\rProgress: ${percentage}%`);
						}
					})
					.on('end', () => {
						processedFiles++;
						console.log(`\nCompression complete: ${compressedFile} (${processedFiles}/${totalFiles})`);
						resolve();
					})
					.on('error', (err) => {
						console.error(`Error compressing ${file}:`, err);
						reject(err);
					})
					.save(compressedFile);
			});
		}
		console.log('MP4 compression for web complete.');
	} catch (error) {
		console.error('Error processing files:', error);
	}
})();