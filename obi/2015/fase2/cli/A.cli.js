import { input, output } from '../../../../utils/io.js';
import countConvexHullLower from '../A.js';

const n = Number(input());

const points = [];

for (let i = 0; i < n; i++) {
    const [x, y] = input().split(' ').map(Number);
    points.push({ x, y });
}

const result = countConvexHullLower(points);

output(result);