function scrollRight() {
    const newMatrix = [];
    for (let i = 0; i < lines; i++) {
        newMatrix[i] = matrix[i].slice(-1).concat(matrix[i].slice(0, -1));
    }
    matrix = newMatrix;
    return newMatrix;
}

function scrollLeft() {
    const newMatrix = [];
    for (let i = 0; i < lines; i++) {
        newMatrix[i] = matrix[i].slice(1).concat(matrix[i].slice(0, 1));
    }
    matrix = newMatrix;
    return newMatrix;
}

function scrollUp() {
    const newMatrix = [];
    for (let j = 0; j < columns; j++) {
        let column = matrix.map(row => row[j]);
        column = column.slice(1).concat(column[0]); 
        column.forEach((value, i) => {
            if (!newMatrix[i]) newMatrix[i] = [];
            newMatrix[i][j] = value;
        });
    }
    matrix = newMatrix;
    return newMatrix;  
}

function scrollDown() {
    const newMatrix = [];
    for (let j = 0; j < columns; j++) {
        let column = matrix.map(row => row[j]);
        column = [column[column.length - 1]].concat(column.slice(0, -1)); 
        column.forEach((value, i) => {
            if (!newMatrix[i]) newMatrix[i] = [];
            newMatrix[i][j] = value;
        });
    }
    matrix = newMatrix;
    return newMatrix;
}

const [lines, columns] = prompt()
    .split(' ')
    .map(e => parseInt(e));


function createMatrix(lines){
    let matrix = [];
    for (let i = 0; i < lines; i++) {
        const line = prompt()
        .split(' ')
        .map(Number);
        matrix.push(line);
    }
    return matrix;
}

function showMatrix(matrix){
    matrix.forEach(row => console.log(row.join(' ')));
 
}

let matrix = createMatrix(lines);

while (true) {
    const [x, y] = prompt()
    .split(" ")
    .map(Number);
    if (x == 0 && y == 0) {
        showMatrix(matrix);
        break;
    }
    if (x > 0) {
        for (let i = 0; i < x; i++) {
            matrix = scrollRight();
        }
    } else if (x < 0) {
        for (let i = 0; i < x * -1; i++) {
            matrix = scrollLeft();
        }
    }
    if (y > 0) {
        for (let i = 0; i < y; i++) {
            matrix = scrollUp();
        }
    } else if (y < 0) {
        for (let i = 0; i < y * -1; i++) {
            matrix = scrollDown();
        }
    }
}