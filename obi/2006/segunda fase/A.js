String.prototype.count = function(letter){
    let count = 0;
    for(let i = this.length - 1; i >= 0; i--){
        if(this[i] === letter) count++;
        if(this[i] != letter) return count;
    }
};
function getMatrix(dimension){
    const matrix = [];
    for (let i = 0; i < dimension; i++) {
        const line = prompt()
            .split(' ')
            .map(e => parseInt(e));
        matrix.push(line);
    }
    return matrix;
};

function penalityDown(matrix, dimension) {
    let i = 0;
    let j = 0;
    let visited = [matrix[0][0]];

    while (true) {
        if (i + 1 < dimension && matrix[i + 1][j] !== 0) {
            visited.push(matrix[i + 1][j]);
            i++;
        }
        else if (j + 1 < dimension && matrix[i][j + 1] !== 0) {
            visited.push(matrix[i][j + 1]);
            j++;
        }
        if (i === dimension - 1 && j === dimension - 1) {
            return visited;
        }
    }
};

function penalityRight(matrix, dimension) {
    let i = 0;
    let j = 0;
    let visited = [matrix[0][0]];

    while (true) {
        if (j + 1 < dimension && matrix[i][j + 1] !== 0) {
            visited.push(matrix[i][j + 1]);
            j++;
        }
        if (i + 1 < dimension && matrix[i + 1][j] !== 0) {
            visited.push(matrix[i + 1][j]);
            i++;
        }
        else if (i + 1 < dimension && matrix[i + 1][j] !== 0) {
            visited.push(matrix[i + 1][j]);
            i++;
        };
        if (i === dimension - 1 && j === dimension - 1) {
            return visited;
        }
    }
};
function minPenalitie(productDown,productRight){
    let possibilities = [];
    let first = String(productDown);
    let second = String(productRight);
    possibilities.push(first.count('0'));
    possibilities.push(second.count('0'));
    return Math.min(...possibilities);
};

const dimension = parseInt(prompt());

const matrix = getMatrix(dimension);

const penalitiesDown = penalityDown(matrix,dimension);

const penalitiesRight = penalityRight(matrix,dimension);

const productDown = penalitiesDown.reduce((accumulator, currentValue) => accumulator * currentValue, 1);

const productRight = penalitiesRight.reduce((accumulator, currentValue) => accumulator * currentValue, 1);

console.log(minPenalitie(productDown, productRight));

