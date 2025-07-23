import imagemin from 'imagemin';
import imageminPngquant from 'imagemin-pngquant';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminSvgo from 'imagemin-svgo';
import path from 'path';
import fs from 'fs';

(async () => {
  // Compress images for the web
  const files = await imagemin(['dist/**/*.{png,jpg,jpeg,svg}'], {
    destination: 'dist/', // Base folder remains the same
    plugins: [
      imageminPngquant({
        quality: [0.6, 0.8], // Lower size while keeping quality
        speed: 1, // Best compression
        strip: true // Remove metadata
      }),
      imageminMozjpeg({
        quality: 75, // Balance between quality & compression
        progressive: true // Enable progressive loading
      }),
      imageminSvgo({
        plugins: [
          { removeViewBox: false }, // Keep viewBox for scalability
          { cleanupIDs: true } // Minimize SVG ID usage
        ]
      })
    ]
  });

  // Move files back into their original directories within dist/
  files.forEach(file => {
    const relativeDir = path.relative('dist', path.dirname(file.sourcePath));
    const destinationDir = path.join('dist', relativeDir);

    console.log(`Source: ${file.sourcePath}, Destination Directory: ${destinationDir}`);

    if (!fs.existsSync(destinationDir)) {
      console.log(`Creating directory: ${destinationDir}`);
      fs.mkdirSync(destinationDir, { recursive: true });
    }

    const destinationFilePath = path.join(destinationDir, path.basename(file.sourcePath));
    console.log(`Moving file: ${file.destinationPath} to ${destinationFilePath}`);

    if (fs.existsSync(file.destinationPath)) {
      try {
        fs.renameSync(file.destinationPath, destinationFilePath);
      } catch (err) {
        console.error(`Error moving file: ${err}`);
      }
    } else {
      console.error(`Source file not found: ${file.destinationPath}`);
    }
  });

  console.log('Images compressed and optimized for web.');
})();