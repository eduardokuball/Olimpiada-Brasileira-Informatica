import { input, output } from '../../../../utils/io.js';
import calculateMinimumCost from '../A.js';

const [nStr, finalDistanceStr] = input().split(' ');
const N = Number(nStr);
const finalDistance = Number(finalDistanceStr);

const distances = [];
const speeds = [];

for (let i = 0; i < N; i++) {
    const [d, s] = input().split(' ').map(Number);
    distances.push(d);
    speeds.push(s);
}

const result = calculateMinimumCost(distances, speeds, finalDistance);

output(result.toFixed(3));