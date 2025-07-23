import path from 'path';
import fs from 'fs';
import ffmpeg from 'fluent-ffmpeg';

(async () => {
  // Specify the folder to process
  const baseDir = 'test'; // Replace with your base directory

  // Get all video files in the directory recursively
  const getAllFiles = (dirPath, arrayOfFiles = []) => {
    const files = fs.readdirSync(dirPath);

    files.forEach((file) => {
      const filePath = path.join(dirPath, file);
      if (fs.statSync(filePath).isDirectory()) {
        arrayOfFiles = getAllFiles(filePath, arrayOfFiles);
      } else if (/\.(mp4|avi|mov)$/i.test(file)) {
        arrayOfFiles.push(filePath);
      }
    });

    return arrayOfFiles;
  };

  const files = getAllFiles(baseDir);

  for (const file of files) {
    const relativeDir = path.relative(baseDir, path.dirname(file));
    const destinationDir = path.join(baseDir, relativeDir);

    // Ensure the subdirectory exists
    if (!fs.existsSync(destinationDir)) {
      fs.mkdirSync(destinationDir, { recursive: true });
    }

    const destinationFilePath = path.join(
      destinationDir,
      `${path.basename(file, path.extname(file))}.webm`
    );

    // Ensure the subdirectory exists
    if (!fs.existsSync(destinationFilePath)) {
		// Convert to WebM using FFmpeg
		await new Promise((resolve, reject) => {
			console.log(`Converting ${file} to ${destinationFilePath}`);
			ffmpeg(file)
				.output(destinationFilePath)
				.videoCodec('libvpx-vp9')
				.audioCodec('libopus')
				.on('end', () => {
				console.log(`Converted ${file} to ${destinationFilePath}`);
				resolve();
				})
				.on('error', (err) => {
				console.error(`Error processing ${file}:`, err.message);
				reject(err);
				})
				.on('progress', (progress) => {
					const percent = Math.round(progress.percent);
					const time = progress.timemark;
					process.stdout.clearLine();
					process.stdout.cursorTo(0);
					process.stdout.write(`Converting ${file} - ${percent}% complete (${time})`);
				})
				.run();
			});
	}
  }

  console.log('Videos converted to WebM and saved in their original directories.');
})();