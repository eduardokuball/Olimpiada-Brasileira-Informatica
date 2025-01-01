function move1(coordenates){
    const [x, y] = [coordenates.x, coordenates.y];
    squaresCovered.push({ x: x, y: y + 1 });
    squaresCovered.push({ x: x, y: y + 2 });
    squaresCovered.push({ x: x + 1, y: y + 2 });
    currentCoordenates = squaresCovered[squaresCovered.length - 1];
    return squaresCovered;
};

function move2(coordenates){
    const [x, y] = [coordenates.x, coordenates.y];
    squaresCovered.push({ x: x + 1, y: y });
    squaresCovered.push({ x: x + 2, y: y});
    squaresCovered.push({ x: x + 2, y: y + 1 });
    currentCoordenates = squaresCovered[squaresCovered.length - 1];
    return squaresCovered;
};

function move3(coordenates){
    const [x, y] = [coordenates.x, coordenates.y];
    squaresCovered.push({ x: x + 1, y: y });
    squaresCovered.push({ x: x + 2, y: y});
    squaresCovered.push({ x: x + 2, y: y - 1 });
    currentCoordenates = squaresCovered[squaresCovered.length - 1];
    return squaresCovered;
};

function move4(coordenates){
    const [x, y] = [coordenates.x, coordenates.y];
    squaresCovered.push({ x: x, y: y - 1 });
    squaresCovered.push({ x: x, y: y - 2});
    squaresCovered.push({ x: x + 1, y: y - 2 });
    currentCoordenates = squaresCovered[squaresCovered.length - 1];
    return squaresCovered;
};

function move5(coordenates){
    const [x, y] = [coordenates.x, coordenates.y];
    squaresCovered.push({ x: x, y: y - 1 });
    squaresCovered.push({ x: x, y: y - 2});
    squaresCovered.push({ x: x - 1, y: y - 2 });
    currentCoordenates = squaresCovered[squaresCovered.length - 1];
    return squaresCovered;
};

function move6(coordenates){
    const [x, y] = [coordenates.x, coordenates.y];
    squaresCovered.push({ x: x -1, y: y });
    squaresCovered.push({ x: x - 2, y: y });
    squaresCovered.push({ x: x - 2, y: y - 1 });
    currentCoordenates = squaresCovered[squaresCovered.length - 1];
    return squaresCovered;
};

function move7(coordenates){
    const [x, y] = [coordenates.x, coordenates.y];
    squaresCovered.push({ x: x -1, y: y });
    squaresCovered.push({ x: x - 2, y: y });
    squaresCovered.push({ x: x - 2, y: y + 1 });
    currentCoordenates = squaresCovered[squaresCovered.length - 1];
    return squaresCovered;
};

function move8(coordenates){
    const [x, y] = [coordenates.x, coordenates.y];
    squaresCovered.push({ x: x, y: y + 1 });
    squaresCovered.push({ x: x, y: y + 2 });
    squaresCovered.push({ x: x - 1, y: y + 2 });
    currentCoordenates = squaresCovered[squaresCovered.length - 1];
    return squaresCovered;
};

const squaresCovered = [];
const holes = [
    { x: 1, y: 3 },
    { x: 2, y: 3 },
    { x: 2, y: 5 },
    { x: 5, y: 4 }
];

let currentCoordenates = {
        x: 4,
        y: 3
};

const quantity = Number(prompt());
const moves = prompt()
   .split(' ',quantity)
   .map(e => parseInt(e));

function Main(i){
    switch (i) {
        case 1:
            move1(currentCoordenates);
            break;
        case 2:
            move2(currentCoordenates);
            break;
        case 3:
            move3(currentCoordenates);
            break;
        case 4:
            move4(currentCoordenates);
            break;
        case 5:
            move5(currentCoordenates);
            break;
        case 6:
            move6(currentCoordenates);
            break;
        case 7:
            move7(currentCoordenates);
            break;
        case 8:
            move8(currentCoordenates);
            break;
    }

};

function executeMoves(moves){
    let count = 0;
    for(const move of moves){
        Main(move);
        for(const hole of holes){
            if(currentCoordenates.x === hole.x && currentCoordenates.y === hole.y){
                count++;
                return count;
            }
        }
        count++
    };
    return count;
};

const movesHorse = executeMoves(moves);
console.log(movesHorse);


