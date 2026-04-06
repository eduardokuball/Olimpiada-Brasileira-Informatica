import { input, output } from '../../../../utils/io.js';
import getLongestCommonPrefixLength from '../A.js';

const length1 = Number(input());
const word1 = input();

const length2 = Number(input());
const word2 = input();

const result = getLongestCommonPrefixLength(word1, word2);

output(result);