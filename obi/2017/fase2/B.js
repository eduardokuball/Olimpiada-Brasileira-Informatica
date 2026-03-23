const [rows, cols] = prompt()
    .split(' ')
    .map((e) => {
        return parseInt(e);
    });

const directions = [
    [0, 0],  
    [-1, 0], 
    [1, 0],   
    [0, 1],  
    [0, -1]  
];

const grid = [];
let startRow = 0;
let startCol = 0;

for (let i = 0; i < rows; i++) {
    const line = prompt();
    grid.push(line);
    const colO = line.indexOf('o');
    if (colO !== -1) {
        startRow = i;
        startCol = colO;
    }
}

let currentRow = startRow;
let currentCol = startCol;
let currentDirection = 0;

while (true) {
    let found = false;
    for (let i = 1; i <= 4; i++) {
        if (i !== currentDirection) {
            const possibleRow = currentRow + directions[i][0];
            const possibleCol = currentCol + directions[i][1];
            if (
                possibleRow >= 0 && possibleRow < rows &&
                possibleCol >= 0 && possibleCol < cols
            ) {
                if (grid[possibleRow][possibleCol] === 'H') {
                    currentDirection = (i % 2 === 0) ? i - 1 : i + 1;
                    currentRow = possibleRow;
                    currentCol = possibleCol;
                    found = true;
                }
            }
        }
    }
    if (!found) {
        break;
    }
}

console.log(`${currentRow + 1} ${currentCol + 1}`);
