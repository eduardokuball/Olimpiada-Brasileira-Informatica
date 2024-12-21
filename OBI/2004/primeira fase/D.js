let [lines,columns] = prompt('digite o número de linhas e colunas da tabela')
.split(' ')
.map(Number);
var matrix = [];

for(let i = 0; i < lines; i++){
    let line = prompt(`digite os números da ${i + 1}`)
    .split(' ')
    .map(Number);
    matrix.push(line);
};

function scrollRight(){
    let newMatrix = [];
    for(let i = 0; i < lines; i++){
        newMatrix[i] = matrix[i].slice(-1).concat(matrix[i].slice(0, -1));
    }
    matrix = newMatrix;
    return newMatrix;
};

function scrollLeft(){
    let newMatrix = [];
    for(let i = 0; i < lines; i++){
        newMatrix[i] = matrix[i].slice(1).concat(matrix[i].slice(0, 1));
    }
    matrix = newMatrix;
    return newMatrix;
}


function scrollUp() {
    let newMatrix = [];
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
    let newMatrix = [];
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


while(true){
    let [x,y] = prompt("digite o deslocamento horizontal e vertical")
    .split(" ")
    .map(Number);
    if(x == 0 && y == 0){
        console.log(matrix);
        break;
    }
    if(x > 0){
        for(let i = 0; i < x; i++){
            matrix = scrollRight();
        }
    } else if(x < 0) {
        for(let i = 0; i < x * -1; i++){
            matrix = scrollLeft();
        }
    }
    if(y > 0){
        for(let i = 0; i < y; i++){
            matrix = scrollUp();
        }
    } else if(y < 0) {
        for(let i = 0; i < y * -1; i++){
            matrix = scrollDown();
        }
    }

}




