const [ rows, columns ] = prompt()
    .split(' ', 2)
    .map(e => parseInt(e));

const crossword = [];

for (let i = 0; i < rows; i++) {
    const line = prompt()
        .split('', columns);

    crossword.push(line);
}




// Pega todas as linhas que tão passando por uma coluna
function getArrayFromColumn(matrix, column) {
    const rows = [];

    matrix.forEach(row => {
        row.forEach((col, J) => {
            if (J === column) rows.push(col);
        });
    });

    return rows;
}

const blackWhiteCrossword = crossword.map(row => {
    return row.map(column => column === '*' ? 0 : null);
});

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
            }

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
}

const wordsNumbersMap = numerateCrossword(blackWhiteCrossword);
console.log(wordsNumbersMap);

function getNumberOfWord(crossword, word) {
    for (const [alt_i, row] of crossword.entries()) {
        const j = row.join('').indexOf(word);
    
        for (const [alt_j] of row.entries()) {
            const column = getArrayFromColumn(crossword, j);
            const i = column.join('').indexOf(word);
    
            const START_I = (i >= 0 && i < column.length) ? i : alt_i;
            const START_J = (j >= 0 && i < row.length) ? j : alt_j;
    
            const X = wordsNumbersMap
            .find(({ i: fi, j: fj }) => (fi === START_I) && (fj === START_J));

            console.warn(`${START_I} : ${START_J}`, X);

            if (X?.number) return X?.number;
        }
    }

    return null;
}

console.warn(getNumberOfWord(crossword, 'ATOS'));
console.warn(getNumberOfWord(crossword, 'JAVA'));
console.warn(getNumberOfWord(crossword, 'BANANA'));

let horizontalWords = [];
let verticalWords = [];


for (let [i, row] of crossword.entries()) {
    const rowWords = row
        .join('')
        .split('*')
        .filter(e => e.length > 1);
    
    horizontalWords = [...horizontalWords, ...rowWords];
    
    row.forEach((_, j) => {
        const column = getArrayFromColumn(crossword, j);
    
        const columnWords = column
            .join('')
            .split('*')
            .filter(e => e.length > 1);

        columnWords.map(e => {
            const wordInfo = {
                number: null,
                word: e
            };

            // wordInfo.number = 0
        });    
    
        verticalWords = [...verticalWords, ...columnWords];
    });
}


console.log(horizontalWords);
console.log(verticalWords);