function valuesMatrix1(p, q, x, i, j) {
    return ((p * i) + (q * j)) % x;
}

function valuesMatrix2(r, s, y, i, j) {
    return ((r * i) + (s * j)) % y;
}

function getMatrix(dimensionsMatrix, a, b, mod, type = 1) {
    const matrix = [];

    for (let i = 1; i <= dimensionsMatrix; i++) {
        let line = [];

        for (let j = 1; j <= dimensionsMatrix; j++) {
            if (type === 1) {
                line.push(valuesMatrix1(a, b, mod, i, j));
            } else {
                line.push(valuesMatrix2(a, b, mod, i, j));
            }
        }

        matrix.push(line);
    }

    return matrix;
}

function multiplyMatrices(A, B) {
    let result = new Array(A.length)
        .fill(0)
        .map(() => new Array(B[0].length).fill(0));

    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < B[0].length; j++) {
            for (let k = 0; k < A[0].length; k++) {
                result[i][j] += A[i][k] * B[k][j];
            }
        }
    }

    return result;
}

export default function getMatrixValue(dimensionsMatrix, p, q, r, s, x, y, search) {

    const matrix1Result = getMatrix(dimensionsMatrix, p, q, x, 1);
    const matrix2Result = getMatrix(dimensionsMatrix, r, s, y, 2);

    const matrixC = multiplyMatrices(matrix1Result, matrix2Result);

    const i = search[0] - 1;
    const j = search[1] - 1;

    return matrixC[i][j];
}