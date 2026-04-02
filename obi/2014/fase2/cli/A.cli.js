import { input, output } from '../../../../utils/io.js';
import getMostFrequentNote from '../A.js';

const quantity = Number(input());

const grades = input().split(' ').map(Number);

const result = getMostFrequentNote(grades);

output(result);