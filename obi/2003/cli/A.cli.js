import { input, output } from '../../../utils/io.js';
import distribution from '../A.js';

const quantity = Number(input());

const rounds = [];

for (let i = 0; i < quantity; i++) {
    const [j, z] = input().split(' ').map(Number);
    rounds.push([j, z]);
}

const result = distribution(quantity, rounds);

output(result.join('\n'));