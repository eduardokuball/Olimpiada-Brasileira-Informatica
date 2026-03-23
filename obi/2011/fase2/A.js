function checkSquareNumbers(square=[]) {
    const squareSide = square.length;

    const numbers = Array(squareSide ** 2).fill()
        .map((_, i) => i + 1);

    return numbers.every(e => square.flat().includes(e));
}

const sumArray = (arr=[]) => arr
    .reduce((total, e) => total + e, 0);

const sumLine = (square=[], line) => sumArray(square[line]);

function sumColumn(square=[], column) {
    const columns = [];

    square.forEach(line => {
        line.forEach((col, i) => {
            if (i === column) columns.push(col);
        });
    });

    return sumArray(columns);
}

function getMainDiagonal(square=[]) {
    const mainDiagonal = [];

    square.forEach((line, i) => {
        line.forEach((column, j) => {
            if (i === j) mainDiagonal.push(column);
        });
    });

    return mainDiagonal;
}

const sumDiagonal = (diagonal=[]) => sumArray(diagonal);


const squareSide = parseInt(prompt());
const square = [];

for (let i = 0; i < squareSide; i++) {
    const squareLine = prompt()
        .split(' ', squareSide)
        .map(e => parseInt(e));
    
    square.push(squareLine);    
}

const baseSum = sumLine(square, 0);

let isPerfectSquare = true;

if (!checkSquareNumbers(square)) isPerfectSquare = false;

square.forEach((line, i) => {
    const lineSum = sumLine(square, i);

    if (lineSum !== baseSum) isPerfectSquare = false;

    line.forEach((column, j) => {
        const columnSum = sumColumn(square, j);

        if (columnSum !== baseSum) isPerfectSquare = false;
    })
});

const diagonal = getMainDiagonal(square);
const diagonalSum = sumDiagonal(diagonal);

if (diagonalSum !== baseSum) isPerfectSquare = false;

console.log(isPerfectSquare ? baseSum : 0);
