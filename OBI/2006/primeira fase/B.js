const [ matrixX, matrixY, submatrixX, submatrixY ] = prompt()
    .split(' ', 4)
    .map(e => parseInt(e));

const cajusMatrix = [];

for (let i = 1; i <= matrixX; i++) {
    const line = prompt()
        .split(' ', matrixY)
        .map(e => parseInt(e));

    cajusMatrix.push(line);
}



const cajuSums = [];


for (let j = 0; j < cajusMatrix.length; j++) {
    let values = [];

    for (let i = 0; i < cajusMatrix.length; i++) {
        for (let c = i; c < i+submatrixX; c++) {
            if (i + submatrixX > cajusMatrix.length) break;
    
            const cajuInternalRow = cajusMatrix[c];
    
            const rowValues = cajuInternalRow
                .slice(j, j + submatrixY)
                .map(e => parseInt(e));
            
            values.push(rowValues);
        }
    
    
        if (values.length > 0) {
            const valuesSum = values.flat().reduce((acc, e) => acc + e, 0);
            cajuSums.push(valuesSum);
        }
    
        values = [];
    }
}

const maxSum = Math.max(...cajuSums);

console.log(maxSum);
