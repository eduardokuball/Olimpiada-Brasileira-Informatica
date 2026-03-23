const [n, c, m] = prompt()
    .split(" ")
    .map((e) => {
        return parseInt(e);
    });

const stampedStickers = prompt()
    .split(" ")
    .map((e) => {
        return parseInt(e);
    });
const boughtStickers = prompt()
    .split(" ")
    .map((e) => {
        return parseInt(e);
    });

const album = new Set();

for (const sticker of boughtStickers) {
    if (stampedStickers.includes(sticker)) {
        album.add(sticker);
    }
}

console.log(stampedStickers.length - album.size);
