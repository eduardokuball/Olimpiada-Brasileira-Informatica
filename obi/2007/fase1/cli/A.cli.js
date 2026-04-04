import { input, output } from '../../../../utils/io.js';
import pushStock from '../A.js';

const quantity = Number(input());

const divisions = input()
    .split(' ',quantity)
    .map(Number);

const result = pushStock(divisions);

output(result);