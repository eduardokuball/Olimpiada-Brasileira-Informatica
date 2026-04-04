import { input, output } from '../../../../utils/io.js';
import getStepsUntilFall from '../B.js';

const n = Number(input());
const moves = input().split(' ').map(Number);

const result = getStepsUntilFall(moves);

output(result);