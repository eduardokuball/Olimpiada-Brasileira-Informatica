import { input, output } from '../../../../utils/io.js';
import buildLargestSequence from '../A.js';

const size = Number(input());
const sequence = input().split(' ').map(Number);

const result = buildLargestSequence(sequence);

if (result === -1) {
    output(result);
} else {
    output(result.join(' '));
}