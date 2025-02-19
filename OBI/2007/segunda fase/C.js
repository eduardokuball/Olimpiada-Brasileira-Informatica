function getMatrix() {
    let matrix = [];
    for (let i = 0; i < lines; i++) {
        let line = prompt()
            .split(' ')
            .map(e => parseInt(e));
        matrix.push(line);
    }
    return matrix;
}

const [lines, columns] = prompt()
    .split(' ', 2)
    .map(e => parseInt(e));

function upgradeheights(matrix) {
    for (let i = 0; i < lines; i++) {
        for (let j = 0; j < columns; j++) {
            if (matrix[i][j] < 9) matrix[i][j]++;
            if(matrix[i][j] == 9) matrix[i][j] = 0;
        }
    }
}
let matrix = getMatrix();
function jumps(matrix) {
    let currentX = 0; 
    let currentY = 0;
    let turns = 0;

    while (true) {
        console.log(`(${currentX + 1}, ${currentY + 1})`);
        if (currentX + 1 < lines && matrix[currentX + 1][currentY] <= matrix[currentX][currentY] + 1) {
            currentX++;
        }
        else if (currentY + 1 < columns && matrix[currentX][currentY + 1] <= matrix[currentX][currentY] + 1) {
            currentY++;
        }

        else if (currentY - 1 >= 0 && matrix[currentX][currentY - 1] <= matrix[currentX][currentY] + 1) {
            currentY--;
        }

        else if (currentX - 1 >= 0 && matrix[currentX - 1][currentY] <= matrix[currentX][currentY] + 1) {
            currentX--;
        }
        
        turns++;
        upgradeheights(matrix);


        if(currentX == lines - 1 && currentY == columns - 1){
            break;  
        }
    }
    
    return turns;
}

console.log(jumps(matrix));
