export default function countMissingStickers(stampedStickers, boughtStickers) {
    const stampedSet = new Set(stampedStickers);
    const collected = new Set();

    for (const sticker of boughtStickers) {
        if (stampedSet.has(sticker)) {
            collected.add(sticker);
        }
    }

    return stampedStickers.length - collected.size;
}