export default function scrollMatrix(lines, columns, matrix, operations) {

    function scrollRight(mat) {
        return mat.map(row => row.slice(-1).concat(row.slice(0, -1)));
    }

    function scrollLeft(mat) {
        return mat.map(row => row.slice(1).concat(row.slice(0, 1)));
    }

    function scrollUp(mat) {
        const newMatrix = Array.from({ length: lines }, () => Array(columns));

        for (let j = 0; j < columns; j++) {
            let column = mat.map(row => row[j]);
            column = column.slice(1).concat(column[0]);

            column.forEach((value, i) => {
                newMatrix[i][j] = value;
            });
        }

        return newMatrix;
    }

    function scrollDown(mat) {
        const newMatrix = Array.from({ length: lines }, () => Array(columns));

        for (let j = 0; j < columns; j++) {
            let column = mat.map(row => row[j]);
            column = [column[column.length - 1]].concat(column.slice(0, -1));

            column.forEach((value, i) => {
                newMatrix[i][j] = value;
            });
        }

        return newMatrix;
    }

    let currentMatrix = matrix;

    operations.forEach(([x, y]) => {

        if (x > 0) {
            for (let i = 0; i < x; i++) {
                currentMatrix = scrollRight(currentMatrix);
            }
        } else if (x < 0) {
            for (let i = 0; i < -x; i++) {
                currentMatrix = scrollLeft(currentMatrix);
            }
        }

        if (y > 0) {
            for (let i = 0; i < y; i++) {
                currentMatrix = scrollUp(currentMatrix);
            }
        } else if (y < 0) {
            for (let i = 0; i < -y; i++) {
                currentMatrix = scrollDown(currentMatrix);
            }
        }

    });
    return currentMatrix;
}