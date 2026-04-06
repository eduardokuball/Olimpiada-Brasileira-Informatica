import { input, output } from '../../../../utils/io.js';
import findLastNumberWithDigitSumInRange from '../B.js';

const start = Number(input());
const end = Number(input());
const search = Number(input());

const result = findLastNumberWithDigitSumInRange(start, end, search);

output(result);