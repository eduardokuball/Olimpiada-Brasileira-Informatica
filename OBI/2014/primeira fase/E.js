function isStairMatrix(matrix) {
    let lines = matrix.length;
    let columns = matrix[0].length;
    
    let lastLeadingIndex = -1; 

    for (let i = 0; i < lines; i++) {
        let firstNonZeroIndex = -1;

       
        for (let j = 0; j < columns; j++) {
            if (matrix[i][j] != 0) {
                firstNonZeroIndex = j;
                break;
            }
        }

        if (firstNonZeroIndex !== -1) {
            if (firstNonZeroIndex <= lastLeadingIndex) {
                return "N";
            }
            lastLeadingIndex = firstNonZeroIndex; 
        }
    }

    return "S";
}

function getMatrix(lines,columns){
    let matrix = [];
    for (let i = 0; i < lines; i++) {
        let line = prompt()
            .split(' ')
            .map(e => parseInt(e));
        matrix.push(line);
    }
    return matrix;
};


const [ lines, columns ] = prompt()
    .split(' ')
    .map(e => parseInt(e));

const matrix = getMatrix(lines, columns);

console.log(isStairMatrix(matrix));



