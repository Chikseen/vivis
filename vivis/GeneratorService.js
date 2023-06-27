// Libs
const path = require("node:path");
const fs = require("fs");
const sharp = require("sharp");

// global
const workDir = path.join(__dirname, "public/images");
const workDirCategories = path.join(__dirname, "pages");

const allImages = getAllImagePaths();
adjustImages(allImages);

function adjustImages(allImages) {
	console.log("___ Checking Images");
	allImages.forEach(async (img) => {
		const image = await sharp(img);
		const metadata = await image.metadata();

		const width = metadata.width;
		const height = metadata.height;

		if (metadata.format != "webp" || width > 800 || height > 800) {
			console.log("Redo:  " + img);

			if (width > height) image.resize({ width: 800, withoutEnlargement: true });
			else image.resize({ height: 800, withoutEnlargement: true });

			image
				.webp({
					quality: 100,
					chromaSubsampling: "4:4:4",
				})
				.toBuffer()
				.then((data) => {
					fs.writeFileSync(img.replace(/\.jpg|\.png|\.JPG|\.PNG|\.JPEG/gm, ".webp"), data);
					fs.unlinkSync(img);
				});
		}
	});
}

// Getall folders
function getAllImagePaths() {
	console.log("___ Getting all Imagepaths");
	let imagePathList = [];
	let imgsJSON = {};

	const files = fs.readdirSync(workDir);
	files.forEach(async (file) => {
		const imageFolderPath = path.join(workDir, file);
		const images = fs.readdirSync(imageFolderPath);
		imgsJSON[file] = [];
		images.forEach((img) => {
			imgsJSON[file].push(img);
			const imgPath = path.join(imageFolderPath, img);
			console.log(imgPath);
			imagePathList.push(imgPath);
		});
	});

	let categories = fs.readdirSync(workDirCategories);
	categories = categories.map((c) => c.replace(".vue", ""));
	const toBeExcluded = ["DataPrivacy", "Impressum", "index"];
	categories = categories.filter((c) => !toBeExcluded.includes(c));
	imgsJSON._categories = categories;

	fs.writeFileSync(path.join(__dirname, "imgs.json"), JSON.stringify(imgsJSON));
	return imagePathList;
}
