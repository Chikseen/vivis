const h = "#fashion #fashionshooting #couture #dress #creme #brownhair #femalemodel #beauty #beautifulwomen #derkraft #dresden #photography #photooftheday #redlips #intensiveeyes #inkedgirls #sensitive #jinbeisfavoriten #fujifilmxt3 #editwithus #captureone";

let arr = h.split("#").filter((t) => t != "");
arr = arr.sort();
arr = arr.map((t) => (t = t.trim()));

let tagList = [];
arr.forEach((t) => {
  tagList.push(`<a href="https://www.instagram.com/explore/tags/${t}/">#${t}</a>\n`);
});

console.log(tagList.join(""));
