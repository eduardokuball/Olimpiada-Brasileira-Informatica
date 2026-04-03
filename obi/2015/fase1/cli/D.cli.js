import { input, output } from '../../../../utils/io.js';
import calculateCount from '../D.js';

const [n, m] = input().split(' ').map(Number);

const result = calculateCount(n, m);

output(result);