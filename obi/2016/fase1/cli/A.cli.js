import { input, output } from '../../../../utils/io.js';
import calculateMinimumMoves from '../A.js';

const values = input().split(' ').map(Number);

const result = calculateMinimumMoves(values);

output(result);