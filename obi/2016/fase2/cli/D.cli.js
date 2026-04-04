import { input, output } from '../../../../utils/io.js';
import calculatePenalties from '../D.js';

const n = Number(input());
const coords = [];

for (let i = 0; i < n; i++) {
    const [x, y] = input().split(' ').map(Number);
    coords.push({ x, y });
}

const result = calculatePenalties(coords);

result.forEach(r => output(r));