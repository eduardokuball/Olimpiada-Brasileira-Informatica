import { input, output } from '../../../../utils/io.js';
import canPatrolAllTrees from '../D.js';

const [trees, reach] = input().split(' ').map(Number);

const jungle = [];

for (let i = 0; i < trees; i++) {
    const [x, y] = input().split(' ').map(Number);
    jungle.push({ x, y });
}

const result = canPatrolAllTrees(jungle, reach);

output(result);