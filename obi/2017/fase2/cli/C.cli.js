import { input, output } from '../../../../utils/io.js';
import countSegments from '../C.js';

const n = Number(input());
const heights = input().split(' ').map(Number);

const result = countSegments(heights);

output(result);