const dimension = Number(prompt('digite a dimensão do quadrado'));
const square = [];
const numbersInSquare = [];

for (let i = 1; i <= dimension * dimension; i++) {
    numbersInSquare.push(i);
}

for (let i = 0; i < dimension; i++) {
    const line = prompt('digite os valores da linha')
    .split(' ')
    .map(Number);
    line.forEach((l) => {
        square.push(l);
    });
}

function search() {
    let wanted = 0;
    numbersInSquare.forEach((n) => {
        if (!square.includes(n)) {
            wanted += n;
        }
    });
    return wanted;
}

const index = square.indexOf(0);

function searchLine() {
    const line = Math.floor(index / dimension);
    return line + 1;
}

function searchColumn() {
    const column = index % dimension;
    return column + 1;
}

console.log(search());
console.log(searchLine());
console.log(searchColumn());