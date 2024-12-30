function processRound(players, input) {
    const [playerCount, order, ...reportPlayers] = input;
    reportPlayers.forEach((reportedPlayer, index) => {
        if (reportedPlayer !== order) {
            players.splice(index, 1);
        }
    });
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
}

console.log(players.join(' '));
