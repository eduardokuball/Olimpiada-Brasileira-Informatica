import { input, output } from '../../../../utils/io.js';
import calculateMinPalindromePartitions from '../B.js';

const size = Number(input());
const string = input();

const result = calculateMinPalindromePartitions(string);

output(result);