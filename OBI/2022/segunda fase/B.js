function generatePyramid(size) {
    let pyramid = [];

    for (let i = 1; i <= size; i++) {
        pyramid.push([]);

        for (let j = 1; j <= size; j++) {
            let paddings = {
                top: i,
                right: size - j + 1,
                bottom: size - i + 1,
                left: j,
            };

            let squareValue = Math.min(
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

let pyramidSize = parseInt(prompt());
let pyramid = generatePyramid(pyramidSize);

console.table(pyramid);