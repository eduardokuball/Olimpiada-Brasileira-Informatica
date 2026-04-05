import { input, output } from '../../../../utils/io.js';
import classifyHeights from '../B.js';

const N = Number(input());
const heights = input().split(' ').map(Number);

const result = classifyHeights(heights);

output(result.join(' '));