import { input, output } from '../../../../utils/io.js';
import countWalls from '../B.js';

const n = Number(input());

const result = countWalls(n);

output(result);