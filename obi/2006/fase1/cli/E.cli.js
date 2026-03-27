import { input, output } from '../../../../utils/io.js';
import redistribution from '../E.js';

const piles = Number(input());

const rocks = input()
    .split(' ')
    .map(Number);

const result = redistribution(rocks);

output(result);