import { input, output } from '../../../utils/io.js';
import minPalindromePartitions from '../C.js';

const size = Number(input());
const string = input();

const result = minPalindromePartitions(string, size);

output(result);