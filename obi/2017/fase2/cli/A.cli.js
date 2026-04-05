import { input, output } from '../../../../utils/io.js';
import determineWinner from '../A.js';

const n = Number(input());
const rounds = [];

for (let i = 0; i < n; i++) {
    const [d, x] = input().split(' ').map(Number);
    rounds.push([d, x]);
}

const result = determineWinner(rounds);

output(result);