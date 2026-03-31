import { input, output } from '../../../../utils/io.js';
import buildSquare from '../D.js';

const [dimension, targetSum] = input()
    .split(' ')
    .map(Number);

const result = buildSquare(dimension, targetSum);

for (let i = 0; i < result.length; i++) {
    output(result[i].join(' '));
}