function numerateCrossword(emptyCrossword) {
    let counter = 1;

    const wordsNumber = [];

    emptyCrossword.forEach((row, i) => {
        row.forEach((column, j) => {
            if (column === 0) return;

            const neighbors = {
                '↑': emptyCrossword?.[i-1]?.[j],
                '→': emptyCrossword?.[i]?.[j+1],
                '↓': emptyCrossword?.[i+1]?.[j],
                '←': emptyCrossword?.[i]?.[j-1]
            };

            const conditions = [
                neighbors['←'] === 0 && neighbors['→'] === null,
                neighbors['↑'] === 0 && neighbors['↓'] === null,
                j === 0 && neighbors['→'] === null,
                i === 0 && neighbors['↓'] === null
            ];

            if (conditions.some(e => e === true)) {
                emptyCrossword[i][j] = counter;
                wordsNumber.push({ i, j, number: counter });
                counter++;
            }
        });
    });

    return wordsNumber;
};

function getWordsHorizontal(rows, columns, crossword, numbered) {
    let horizontal = [];

    for (let i = 0; i < rows; i++) {
        let word = "";
        let startI = null;
        let startJ = null;
        for (let j = 0; j < columns; j++) {
            if (crossword[i][j] !== null && crossword[i][j] !== 0 && crossword[i][j] !== '*') {
                if (word.length === 0) {
                    startI = i;
                    startJ = j;
                }
                word += crossword[i][j];
            } else {
                if (word.length > 1) {
                    horizontal.push({ word, number: numbered[startI][startJ] });
                }
                word = "";
                startI = null;
                startJ = null;
            }
        }
    
        if (word.length > 1) {
            horizontal.push({ word, number: numbered[startI][startJ] });
        }
    }
    return horizontal.sort((a, b) => a.number - b.number);
}

function getWordsVertical(rows, columns, crossword, numbered) {
    let vertical = [];
    for (let j = 0; j < columns; j++) {
        let word = "";
        let startI = null;
        let startJ = null;
            for (let i = 0; i < rows; i++) {
                if (crossword[i][j] !== null && crossword[i][j] !== 0 && crossword[i][j] !== '*') {
                if (word.length === 0) {
                startI = i;
                startJ = j;
                }
            word += crossword[i][j];
                }  else {
                    if (word.length > 1) {
                    vertical.push({ word, number: numbered[startI][startJ] });
                }
            word = "";
            startI = null;
            startJ = null;
        }
    }
    if (word.length > 1) {
        vertical.push({ word, number: numbered[startI][startJ] });
    }
};  
    return vertical.sort((a, b) => a.number - b.number);
}

// Main Function
export default function crosswords(matrix) {
    const toNumberRow = r => r.map(c => c === '*' ? 0 : null);
    const numbered = matrix.map(toNumberRow);
    
    const rows = matrix.length;
    const columns = matrix[0].length;

    numerateCrossword(numbered);
    
    const horizontal = getWordsHorizontal(rows, columns, matrix, numbered);
    const vertical = getWordsVertical(rows, columns, matrix, numbered);
    
    return { horizontal, vertical };
}
