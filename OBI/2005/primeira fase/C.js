function processRound(players, input) {
    const [, order, ...reportPlayers] = input;
    for (let index = reportPlayers.length - 1; index >= 0; index--) {
        if (reportPlayers[index] !== order) {
            players.splice(index, 1);
        }
    }
    return players;
}

const [quantity, rounds] = prompt()
    .split(' ')
    .map(e => parseInt(e));

let players = prompt()
    .split(' ')
    .map(e => parseInt(e));

for (let i = 0; i < rounds; i++) {
    const input = prompt()
        .split(' ')
        .map(Number);
    players = processRound(players, input);
    console.log(players);
}

console.log(players.join(' '));
