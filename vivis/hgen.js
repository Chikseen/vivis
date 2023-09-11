const h = "#shootingstars #blackandwhite #picoftheday #pictureoftheday #instagram #instagood #modelshoot #modelphotographer #portait #portaitphotography #bwphotography #sonya7ili #canon50mm14 #modelsearch #outdorphotography #portrait";

let arr = h.split("#").filter((t) => t != "");
arr = arr.sort();
arr = arr.map((t) => (t = t.trim()));

let tagList = [];
arr.forEach((t) => {
	tagList.push(`"${t}",\n`);
});

console.log(tagList.join(""));
