let rounds = Number(window.prompt('digite quantas rodadas'));
let player1 = prompt('player 1');
let player2 = prompt('player 2');
let winners = [];

for(let i = 0; i < rounds; i++){
    let[n1,n2] = prompt('digite a jogada de cada um').split(' ').map(Number);
    if((n1 + n2) % 2 == 0){
        winners.push(player1);
    } else {
        winners.push(player2);
    }
};

console.log(winners.join('\n'));