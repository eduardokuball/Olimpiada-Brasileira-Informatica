import { input, output } from '../../../../utils/io.js';
import computer from '../D.js';

const [N, M] = input().split(' ', 2).map(Number);
const instructions = [];

for (let i = 0; i < M; i++) {
    console.warn(i)
    const instruction = input().split(' ', 3).map(Number);
    instructions.push(instruction);
}

const result = computer(N, instructions);
output(result.join('\n'));
