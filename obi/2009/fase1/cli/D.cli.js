import { input, output } from '../../../../utils/io.js';
import didExceedMaximumDistance from '../D.js';

const [registers, maximumDistance] = input()
    .split(' ')
    .map(Number);

const movements = [];

for (let i = 0; i < registers; i++) {
    const [direction, distance] = input().split(' ');
    movements.push([direction, Number(distance)]);
}

const result = didExceedMaximumDistance(registers, maximumDistance, movements);

output(result ? 1 : 0);