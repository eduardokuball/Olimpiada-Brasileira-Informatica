import { input, output } from '../../../utils/io.js';
import solveGame from '../A.js';

const rounds = Number(input());

const roundsData = [];

for (let i = 0; i < rounds; i++) {
    const [n1, n2] = input().split(' ').map(Number);
    roundsData.push([n1, n2]);
}

const result = solveGame(roundsData);

output(result);