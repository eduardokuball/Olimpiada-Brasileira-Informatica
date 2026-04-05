export default function calculateTiles(width, length) {
    const type1Tiles = width * length + (width - 1) * (length - 1);
    const type2Tiles = (width - 1) * 2 + (length - 1) * 2;

    return [type1Tiles, type2Tiles];
}