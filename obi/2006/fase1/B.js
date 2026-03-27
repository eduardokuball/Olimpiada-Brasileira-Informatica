export default function maxCajuSum(matrix, submatrixX, submatrixY) {
    console.log(matrix);
    const matrixX = matrix.length;
    const matrixY = matrix[0].length;

    const cajuSums = [];

    for (let i = 0; i < matrixX; i++) {
        for (let j = 0; j < matrixY; j++) {

            if (i + submatrixX > matrixX || j + submatrixY > matrixY) continue;

            let sum = 0;

            for (let x = 0; x < submatrixX; x++) {
                for (let y = 0; y < submatrixY; y++) {
                    sum += matrix[i + x][j + y];
                }
            }

            cajuSums.push(sum);
        }
    }

    return Math.max(...cajuSums);
}