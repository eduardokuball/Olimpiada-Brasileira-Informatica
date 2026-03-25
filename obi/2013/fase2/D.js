import P from '../../../utils/Permutations2.js';

function splitPairs(players) {
    const pairs = [];
    for (let i = 1; i < players.length; i+=2)
        pairs.push([players[i-1], players[i]]);
    return pairs;
}

function roundHeLost(target, players) {
    let rounds = splitPairs(players);
    let currentRound = 1;
    
    while (rounds.length > 1) {       
        const winners = rounds.map(pair => Math.max(...pair));
        if (!winners.includes(target)) return currentRound;
        currentRound++;
        rounds = splitPairs(winners);
    }

    return currentRound;
}

// Main Function
export default function main(players, roundK) {
    console.log('Players:', players, 'Round K:', roundK);
    const target = players[0];

    console.log('Target:', target);

    let lostsInRoundK = 0;
    const dispositions = P.fromArray(players);

    console.log('Total Dispositions:', dispositions);


    dispositions.forEach(disp => {
        const round = roundHeLost(target, disp)
        console.log('Disposition:', disp, 'Round He Lost:', round, "Round K:", roundK);
        if (round === roundK) lostsInRoundK++; 
    });

    return lostsInRoundK;
}
