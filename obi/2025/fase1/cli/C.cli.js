import { input, output } from '../../../../utils/io.js';
import hidden from '../C.js';

const persons = Number(input());

const queue = input().split(" ", persons).map(Number);

const result = hidden(queue);

output(result);