const rounds = Number(window.prompt('digite quantas rodadas'));
const player1 = prompt('player 1');
const player2 = prompt('player 2');
const winners = [];

for (let i = 0; i < rounds; i++) {
    const [n1, n2] = prompt('digite a jogada de cada um')
    .split(' ')
    .map(Number);
    if ((n1 + n2) % 2 == 0) {
        winners.push(player1);
    } else {
        winners.push(player2);
    }
}

console.log(winners.join('\n'));