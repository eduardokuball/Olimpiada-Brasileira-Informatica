import { input, output } from '../../../../utils/io.js';
import calculateGenerationPercentages from '../C.js';

const [n, m] = input().split(' ').map(Number);

const parents = input().split(' ').map(Number);
const present = input().split(' ').map(Number);

const result = calculateGenerationPercentages(n, parents, present);

output(result.join(' '));