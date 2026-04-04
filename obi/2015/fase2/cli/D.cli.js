import { input, output } from '../../../../utils/io.js';
import sumBinaryArrays from '../D.js';

const [m, n] = input().split(' ').map(Number);
const x = input().split(' ').map(Number);
const y = input().split(' ').map(Number);

const result = sumBinaryArrays(m, n, x, y);

output(result.join(' '));