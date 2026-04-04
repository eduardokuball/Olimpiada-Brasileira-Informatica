import { input, output } from '../../../../utils/io.js';
import findSeat from '../C.js';

const [rows, columns, firstClass, position] = input()
    .split(' ')
    .map(Number);

const result = findSeat(rows, columns, firstClass, position);

output(result);