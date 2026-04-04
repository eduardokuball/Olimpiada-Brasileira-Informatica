import { input, output } from '../../../../utils/io.js';
import isValidConfiguration from '../C.js';

const points = [];

for (let i = 0; i < 7; i++) {
    const [x, y] = input().split(' ').map(Number);
    points.push([x, y]);
}

const result = isValidConfiguration(points);

output(result);