import { input, output } from '../../../../utils/io.js';
import simulateGameOfLife from '../D.js';

const [side, steps] = input().split(' ').map(Number);

const game = [];

for (let i = 0; i < side; i++) {
    const row = input().split('').map(Number);
    game.push(row);
}

const result = simulateGameOfLife(game, steps);

// result.forEach(row => output(row.join('')));