function processRound(players, input) {
    const [, order, ...reportPlayers] = input;

    const filtered = [];

    for (let i = 0; i < reportPlayers.length; i++) {
        if (reportPlayers[i] === order) {
            filtered.push(players[i]);
        }
    }

    return filtered;
}

export default function solveGame(rounds, players, roundsData) {

    console.log
    let currentPlayers = [...players];

    for (let i = 0; i < rounds; i++) {
        currentPlayers = processRound(currentPlayers, roundsData[i]);
    }

    return currentPlayers.join(' ');
}