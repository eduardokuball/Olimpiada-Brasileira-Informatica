import { input, output } from '../../../../utils/io.js';
import distinctChallenge from '../C.js';

const roundsN = parseInt(input());
const rounds = [];

for (let i = 0; i < roundsN; i++) {
    const round = input().split(' ').map(Number);
    rounds.push(round);
}

const results = distinctChallenge(rounds);
results.forEach(r => output(r));
