import { input, output } from '../../../../utils/io.js';
import calculateMinimumMoves from '../D.js';

const [pins, height] = input().split(' ').map(Number);

const pinsHeights = input().split(' ').map(Number);

const result = calculateMinimumMoves(pinsHeights, height);

output(result);