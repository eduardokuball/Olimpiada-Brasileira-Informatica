import { input, output } from '../../../../utils/io.js';
import canFitWithCut from '../A.js';

const [aX, aY, bX, bY, x, y] = input().split(' ').map(Number);

const result = canFitWithCut(aX, aY, bX, bY, x, y);

output(result);