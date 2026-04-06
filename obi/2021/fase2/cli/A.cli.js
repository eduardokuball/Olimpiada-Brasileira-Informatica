import { input, output } from '../../../../utils/io.js';
import findMinMaxWithDigitSum from '../A.js';

const targetSum = Number(input());
const start = Number(input());
const end = Number(input());

const result = findMinMaxWithDigitSum(targetSum, start, end);

result.forEach(r => output(r));