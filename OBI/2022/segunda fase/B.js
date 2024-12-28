function generatePyramid(size) {
    const pyramid = [];

    for (let i = 1; i <= size; i++) {
        pyramid.push([]);

        for (let j = 1; j <= size; j++) {
            const paddings = {
                top: i,
                right: size - j + 1,
                bottom: size - i + 1,
                left: j,
            };

            const squareValue = Math.min(
                paddings.top,
                paddings.right,
                paddings.bottom,
                paddings.left
            );

            pyramid[i-1].push(squareValue);
        }
    }

    return pyramid;
}

const pyramidSize = parseInt(prompt());
const pyramid = generatePyramid(pyramidSize);

console.table(pyramid);