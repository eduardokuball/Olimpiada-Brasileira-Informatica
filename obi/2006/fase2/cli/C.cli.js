import { input, output } from '../../../../utils/io.js';
import minMissingSubsequenceLength from '../C.js';

const s1 = input();
const s2 = input();

const result = minMissingSubsequenceLength(s1, s2);

output(result);