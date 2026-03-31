import { input, output } from '../../../../utils/io.js';
import countSequences from '../C.js';

const n = input().trim();
const sequence = input().trim();

const result = countSequences(n, sequence);

output(result);