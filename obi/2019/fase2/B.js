const verifyCell = (A, i, j) => (A[0][0] + A[i][j] <= A[0][j] + A[i][0]);

function isCool(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (verifyCell(matrix, i, j)) continue;
            return false;
        }
    }

    return true;
}

const isSuperCool = matrix => checkSubmatrixes(matrix, isCool, 'every')[0];

function subdimensionsOf(width, height) {
    const dimensions = [];
    for (let w = width; w >= 2; w--)
        for (let h = height; h >= 2; h--) dimensions.push([w, h]);
    return dimensions;
}

const sliceMatrix = (matrix=[[]], i, j, w, h) => matrix.slice(i,i+h).map(row => row.slice(j,j+w));

// Uma função que verifica submatrizes utilizando a função isCool ou isSuperCool como callback
function checkSubmatrixes(matrix, callback = () => {}, mode = 'some') {
    const ROWS = matrix.length;
    const COLS = matrix[0].length;

    const dimensions = subdimensionsOf(ROWS, COLS);

    for (const [w, h] of dimensions) {
        const gapX = ROWS - h + 1;
        const gapY = COLS - w + 1;

        for (let i = 0; i < gapX; i++) {
            for (let j = 0; j < gapY; j++) {
                const window = sliceMatrix(matrix, i, j, w, h);
                const isTrue = callback(window);
                if (isTrue && mode === 'some') return [true, window];
                if (!isTrue && mode === 'every') return [false, null];
            }
        }
    }

    return mode === 'some' ? [false, null] : [true, null];
}

// Main Function
export default function superCoolMatrix(matrix) {
    const [isTrue, sub] = checkSubmatrixes(matrix, isSuperCool, 'some');
    if (isTrue) return (sub.length * sub[0].length);
    return 0;
}
