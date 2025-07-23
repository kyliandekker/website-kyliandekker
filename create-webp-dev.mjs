import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';
import path from 'path';
import fs from 'fs';

(async () => {
	// Specify the folder to process
	const baseDir = 'public'; // Replace with your base directory
	const files = await imagemin([`${baseDir}/**/*.{png,jpg,jpeg}`], {
		destination: baseDir, // Base folder
		plugins: [
		imageminWebp({
			quality: 28, // Adjust quality as needed
		}),
		],
	});

	// Move converted files to their original directories
	files.forEach((file) => {
		const relativeDir = path.relative(baseDir, path.dirname(file.sourcePath)); // Relative path
		const destinationDir = path.join(baseDir, relativeDir); // Original directory path

		// Ensure the subdirectory exists, create it if not
		if (!fs.existsSync(destinationDir)) {
		fs.mkdirSync(destinationDir, { recursive: true });
		}

		// Construct the full destination file path with a `.webp` extension
		const destinationFilePath = path.join(destinationDir, path.basename(file.sourcePath).replace(/\.[^/.]+$/, '.webp'));

		// Check if the source file exists before renaming
		if (fs.existsSync(file.destinationPath)) {
		// Rename the converted file back into its original directory
		fs.renameSync(file.destinationPath, destinationFilePath);
		console.log(`Converted ${file.sourcePath} to ${destinationFilePath}`);
		} else {
		console.error(`Source file not found: ${file.destinationPath}`);
		}
	});

	console.log('Images converted to WebP and saved in their original directories.');
})();