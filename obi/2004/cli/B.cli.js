import { input, output } from '../../../utils/io.js';
import calculateDiameter from '../B.js';

const quantity = Number(input());

const points = [];

for (let i = 0; i < quantity; i++) {
    const [x, y] = input().split(' ').map(Number);
    points.push({ x, y });
}

const result = calculateDiameter(points);

output(result);