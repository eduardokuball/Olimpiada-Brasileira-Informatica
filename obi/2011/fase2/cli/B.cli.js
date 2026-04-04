import { input, output } from '../../../../utils/io.js';
import validateBracketsSequences from '../B.js';

const n = Number(input());

const lines = [];

for (let i = 0; i < n; i++) {
    lines.push(input());
}

const result = validateBracketsSequences(lines);

result.forEach(r => output(r));