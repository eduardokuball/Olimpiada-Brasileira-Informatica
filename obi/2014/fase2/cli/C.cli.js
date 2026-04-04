import { input, output } from '../../../../utils/io.js';
import validateSequence from '../C.js';

const [n, m] = input().split(' ').map(Number);

const aValues = input().split(' ').map(Number);
const bValues = input().split(' ').map(Number);

const result = validateSequence(aValues, bValues);

output(result);