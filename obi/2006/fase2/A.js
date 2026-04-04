function countTrailingZeros(num) {
    let count = 0;

    while (num % 10 === 0 && num !== 0) {
        count++;
        num /= 10;
    }

    return count;
}

function getPathDown(matrix, n) {
    let i = 0, j = 0;
    const path = [matrix[0][0]];

    while (i !== n - 1 || j !== n - 1) {
        if (i + 1 < n && matrix[i + 1][j] !== 0) {
            i++;
        } else if (j + 1 < n && matrix[i][j + 1] !== 0) {
            j++;
        } else {
            break; // evita loop infinito
        }

        path.push(matrix[i][j]);
    }

    return path;
}

function getPathRight(matrix, n) {
    let i = 0, j = 0;
    const path = [matrix[0][0]];

    while (i !== n - 1 || j !== n - 1) {
        if (j + 1 < n && matrix[i][j + 1] !== 0) {
            j++;
        } else if (i + 1 < n && matrix[i + 1][j] !== 0) {
            i++;
        } else {
            break;
        }

        path.push(matrix[i][j]);
    }

    return path;
}

export default function minPenalty(matrix) {
    const n = matrix.length;

    const pathDown = getPathDown(matrix, n);
    const pathRight = getPathRight(matrix, n);

    const productDown = pathDown.reduce((acc, v) => acc * v, 1);
    const productRight = pathRight.reduce((acc, v) => acc * v, 1);

    const zerosDown = countTrailingZeros(productDown);
    const zerosRight = countTrailingZeros(productRight);

    return Math.min(zerosDown, zerosRight);
}