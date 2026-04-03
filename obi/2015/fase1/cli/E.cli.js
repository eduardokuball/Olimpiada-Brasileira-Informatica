import { input, output } from '../../../../utils/io.js';
import countWaysToPay from '../E.js';

const target = Number(input());
const notes = input().split(' ').map(Number);

const result = countWaysToPay(target, notes);

output(result);