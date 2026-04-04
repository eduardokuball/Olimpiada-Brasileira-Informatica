import { input, output } from '../../../utils/io.js';
import solveGame from '../C.js';

const [, rounds] = input()
    .split(' ')
    .map(Number);

let players = input()
    .split(' ')
    .map(Number);

const roundsData = [];

for (let i = 0; i < rounds; i++) {
    const roundInput = input().split(' ').map(Number);
    roundsData.push(roundInput);
}

const result = solveGame(rounds, players, roundsData);

output(result);