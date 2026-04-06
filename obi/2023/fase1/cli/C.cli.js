import { input, output } from '../../../../utils/io.js';
import isSubsequence from '../C.js';

const [n, m] = input().split(' ').map(Number);

const sequence = input().split(' ').map(Number);
const subsequence = input().split(' ').map(Number);

const result = isSubsequence(sequence, subsequence);

output(result ? 'S' : 'N');