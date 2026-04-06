export default function countPaintedCubes(dimension) {
    const onePaintedFace = ((dimension - 2) ** 2) * 6;
    const twoPaintedFaces = ((dimension - 2) * 4) * 3;
    const threePaintedFaces = 8;

    const totalCubes = dimension ** 3;
    const noPaintedFaces = totalCubes - onePaintedFace - twoPaintedFaces - threePaintedFaces;

    return [
        noPaintedFaces,
        onePaintedFace,
        twoPaintedFaces,
        threePaintedFaces
    ];
}