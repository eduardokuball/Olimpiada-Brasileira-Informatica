import { input, output } from '../../../../utils/io.js';
import calculateScore from '../B.js';

const [circles, shotsCount] = input().split(' ').map(Number);

const radii = [];

for (let i = 0; i < circles; i++) {
    radii.push(Number(input()));
}

const shots = [];

for (let i = 0; i < shotsCount; i++) {
    const [x, y] = input().split(' ').map(Number);
    shots.push([x, y]);
}

const result = calculateScore(radii, shots);

output(result);