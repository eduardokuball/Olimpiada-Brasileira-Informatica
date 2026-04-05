import { input, output } from '../../../../utils/io.js';
import countSubarraysWithSum from '../C.js';

const [size, search] = input().split(' ').map(Number);
const sequence = input().split(' ').slice(0, size).map(Number);

const result = countSubarraysWithSum(sequence, search);

output(result);