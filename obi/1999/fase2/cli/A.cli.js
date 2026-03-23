import { input, output } from '../../../../utils/io.js';
import calculateRotations from '../A.js';

const n = parseInt(input());
const points = [];

for (let i = 0; i < n; i++) {
    const [x, y] = input().split(' ').map(Number);
    points.push({ x, y });
}

const result = calculateRotations(points);

output(`rotacoes: ${result}`);