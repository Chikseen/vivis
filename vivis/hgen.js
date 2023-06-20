const h = "#hasenland_union #filigreemagazine #bayerischeportraits #portrait_vision #meetup #portraits #portraitshoot #portraitstream #dress #curlyhair #hasenland #portratos #deutschemodels #germanportraiture #modelsinc #deutschefotografen #shootingto #portrait.beauties #art #dynamicportraits #insta_portrait #explorepage #explore";

let arr = h.split("#").filter((t) => t != "");
arr = arr.sort();
arr = arr.map((t) => (t = t.trim()));

let tagList = [];
arr.forEach((t) => {
	tagList.push(`"https://www.instagram.com/explore/tags/${t}/",\n`);
});

console.log(tagList.join(""));
