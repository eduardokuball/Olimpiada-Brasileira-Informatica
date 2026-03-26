import P from '../../../utils/Permutations2.js';

function splitPairs(players) {
    const pairs = [];
    for (let i = 1; i < players.length; i+=2)
        pairs.push([players[i-1], players[i]]);
    return pairs;
}

function simulation(target, players) {
    let rounds = splitPairs(players);
    const res = [false, 1];
    
    while (rounds.length > 0) {
        const winners = rounds.map(pair => Math.max(...pair));
        const heWin = winners.includes(target);
        res[0] = heWin;
        if (!heWin) return res; // Retorna quando é derrotado
        res[1]++; // Conta os rounds
        rounds = splitPairs(winners);
    }

    return res;
}

// Main Function
export default function tournament(players, roundK) {
    const target = players[0];
    const rounds = Math.log2(players.length);

    let counter = 0;
    const dispositions = P.fromArray(players);

    dispositions.forEach(disp => {
        const [heWin, lastRound] = simulation(target, disp);

        const isWinMode = roundK === rounds + 1;
        if (isWinMode) {
            if (heWin) counter++;
            return;
        }

        if (!heWin && lastRound === roundK) counter++;
    });

    return counter;
}
