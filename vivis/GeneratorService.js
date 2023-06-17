// Libs
const path = require("node:path");
const fs = require("fs");
const sharp = require("sharp");

// global
const workDir = path.join(__dirname, "assets/images");

const allImages = getAllImagePaths();
adjustImages(allImages);

function adjustImages(allImages) {
	allImages.forEach((img) => {
		sharp(img)
			.resize({ width: 528 })
			.toFile(img.replace(/\.jpg|\.png|\.JPG|\.PNG/gm, ".jpg"))
			.then(function () {
				console.log("Success");
			})
			.catch(function (e) {
				console.log("Error occured");
				console.log(e);
			});
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
