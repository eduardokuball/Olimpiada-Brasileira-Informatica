function getGame(dimention){
    const game = [];
    for(let i = 0; i < dimention; i++){
        const row = prompt()
            .split('',dimention);
        game.push(row);
    };
    return game;
};

function order(game){
    let newGame = game.map(row => [...row]);
    for(let i = 0; i < newGame.length; i++){
        if(i % 2 != 0){
            newGame[i] = newGame[i].reverse();
        }
    }
    return newGame;
};

function maxCandies(game){
    let candies = 0;
    let possibilities = [];
    for(let i = 0; i < dimention; i++){
        for(let j = 0; j < dimention; j++){
            if(game[i][j] == "o"){
                candies++;
            }
            if(game[i][j] == "A"){
                possibilities.push(candies);
                candies = 0;
            }
        }  
    }
    possibilities.push(candies);
    return possibilities;
};

const dimention = parseInt(prompt());

const game = getGame(dimention);

const newGame = order(game);

const possibilities = maxCandies(newGame);

console.log(Math.max(...possibilities));