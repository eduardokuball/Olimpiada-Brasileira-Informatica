import { input, output } from '../../../utils/io.js';
import determineWinners from '../A.js';

const rounds = Number(input());
const player1 = input();
const player2 = input();

const plays = [];

for (let i = 0; i < rounds; i++) {
    const [n1, n2] = input().split(' ').map(Number);
    plays.push([n1, n2]);
}

const result = determineWinners(rounds, player1, player2, plays);

output(result.join('\n'));