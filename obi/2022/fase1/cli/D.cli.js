import { input, output } from '../../../../utils/io.js';
import countSubarraysWithSum from '../D.js';

const size = Number(input());
const target = Number(input());

const numbers = input().split(' ').map(Number);

const result = countSubarraysWithSum(numbers, target);

output(result);