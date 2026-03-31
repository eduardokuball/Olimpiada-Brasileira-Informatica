import { input, output } from '../../../../utils/io.js';
import getWinner from '../E.js';

const [chocoball, maximum] = input()
    .split(' ')
    .map(Number);

const result = getWinner(chocoball, maximum);

output(result);