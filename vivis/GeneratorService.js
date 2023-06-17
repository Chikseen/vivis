// Libs
const path = require("node:path");
const fs = require("fs");
const sharp = require("sharp");

// global
const workDir = path.join(__dirname, "assets/images");

const allImages = getAllImagePaths();
adjustImages(allImages);

function adjustImages(allImages) {
	console.log("___ Checking Images");
	allImages.forEach(async (img) => {
		const image = await sharp(img);
		const metadata = await image.metadata();

		const width = metadata.width;
		const height = metadata.height;

		if (metadata.format != "jpg" || width > 800 || height > 800) {
			console.log("Redo:  " + img);

			if (width > height) image.resize({ width: 800, withoutEnlargement: true });
			else image.resize({ height: 800, withoutEnlargement: true });

			image
				.jpeg({
					quality: 100,
					chromaSubsampling: "4:4:4",
				})
				.toBuffer(function (err, buffer) {
					fs.writeFile(img.replace(/\.jpg|\.png|\.JPG|\.PNG|\.JPEG/gm, ".jpg"), buffer, function (e) {});
				});

			if (metadata.format != "jpeg") fs.unlinkSync(img);
		}
	});
}

// Getall folders
function getAllImagePaths() {
	console.log("___ Getting all Imagepaths");
	let imagePathList = [];

	const files = fs.readdirSync(workDir);
	files.forEach(async (file) => {
		const imageFolderPath = path.join(workDir, file);
		const images = fs.readdirSync(imageFolderPath);
		images.forEach((img) => {
			const imgPath = path.join(imageFolderPath, img);
			console.log(imgPath);
			imagePathList.push(imgPath);
		});
	});
	return imagePathList;
}
