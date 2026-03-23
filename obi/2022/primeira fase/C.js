function getSquare(dimension){
    const square = [];
    for (let i = 0; i < dimension; i++) {
        const line = prompt()
            .split(' ')
            .map(e => parseInt(e));
        square.push(line);
    }
    return square;
};

function getNumbersInSquare(dimension){
    const numbersInSquare = [];
    for (let i = 1; i <= dimension * dimension; i++) {
        numbersInSquare.push(i);
    }
    return numbersInSquare;
};

function convertToArray(square){
    const array = [];
    for(let i = 0; i < square.length; i++){
        for(let j = 0; j < square.length; j++){
            array.push(square[i][j]);
        }
    }
    return array;
};

function illegibleNumber(numbersInSquare, square) {
    const array = convertToArray(square);
    let search = null
    numbersInSquare.forEach((n) => {
        if (!array.includes(n)) {
            search = n;
        }
    });
    return search;
};


function getIndex(square){
    let index = null;
    for(let i = 0; i < square.length; i++){
        for(let j = 0; j < square.length; j++){
            if(square[i][j] === 0 ){
                index = [i + 1, j + 1];
            }
        }
    }
    return index;
};

const dimension = parseInt(prompt());

const square = getSquare(dimension);

const numbersInSquare = getNumbersInSquare(dimension);

const index = getIndex(square);

console.log(illegibleNumber(numbersInSquare,square));
console.log(index[0]);
console.log(index[1]);