import path from 'path';
import fs from 'fs';
import { promisify } from 'util';
import glob from 'glob';
import ffmpeg from 'fluent-ffmpeg';

const globAsync = promisify(glob);

(async () => {
  try {
    // Find all MP4 files in the 'test' directory
    const files = await globAsync('test/**/*.mp4');
    const totalFiles = files.length;
    let processedFiles = 0;
    
    for (const file of files) {
      const relativeDir = path.relative('test', path.dirname(file));
      const destinationDir = path.join('test', relativeDir);
      const compressedFile = path.join(destinationDir, `${path.parse(file).name}_c${path.extname(file)}`);

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
            '-vf scale=-2:1080', // Increased resolution to 1080p
            '-b:a 192k' // Increased audio bitrate
          ])
          .on('codecData', (data) => {
            totalFrames = parseInt(data.duration.split(':').reduce((acc, time) => (60 * acc) + +time) * 30, 10);
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
