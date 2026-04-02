import { input, output } from '../../../../utils/io.js';
import getMaxArea from '../B.js';

const [tube, carpet] = input().split(' ').map(Number);

const result = getMaxArea(tube, carpet);

output(result);