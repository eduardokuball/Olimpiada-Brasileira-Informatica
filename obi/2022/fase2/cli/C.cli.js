import { input, output } from '../../../../utils/io.js';
import getLongestPalindromeSubstringLength from '../C.js';

const size = Number(input()); 
const word = input();

const result = getLongestPalindromeSubstringLength(word);

output(result);