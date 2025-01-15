function getMatrix(lines,columns){
    let matrix = [];
    for (let i = 0; i < lines; i++) {
        const line = prompt()
        .split(' ',columns)
        .map(Number);
        matrix.push(line);
    }
    return matrix;
};
function lowestValues(matrix,lines,columns){
    let values = [];
    for(let j = 0; j < columns; j++) {
        let valuesOfColumn = []
        for(let i = 0; i < lines; i++) {
            valuesOfColumn.push(matrix[i][j]);
        }
        const sum = valuesOfColumn.reduce((acc, e) => acc + e, 0);
        values.push(sum);
    }
    return Math.min(...values);
};

const [lines,columns] = prompt()
    .split(' ')
    .map(e => parseInt(e));

const matrix = getMatrix(lines, columns);

const lowestValue = lowestValues(matrix,lines,columns);

console.log(lowestValue);