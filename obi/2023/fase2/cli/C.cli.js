import { input, output } from '../../../../utils/io.js';
import getLongestDistinctSubarrayLength from '../C.js';

const size = Number(input());

const sequence = [];

for (let i = 0; i < size; i++) {
    sequence.push(Number(input()));
}

const result = getLongestDistinctSubarrayLength(sequence);

output(result);