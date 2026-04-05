import { input, output } from '../../../../utils/io.js';
import maxAlternatingSubsequenceLength from '../A.js';

const N = Number(input());
const v = [];

for (let i = 0; i < N; i++) {
    v.push(Number(input()));
}

const result = maxAlternatingSubsequenceLength(v);

output(result);