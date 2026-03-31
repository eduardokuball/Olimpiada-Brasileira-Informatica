import { input, output } from '../../../../utils/io.js';
import calculateMaxFloor from '../B.js';

const [possibilities, balloon] = input()
    .split(' ')
    .map(Number);

const result = calculateMaxFloor(possibilities, balloon);

output(result);