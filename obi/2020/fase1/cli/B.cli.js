import { input, output } from '../../../../utils/io.js';
import areAnagrams from '../B.js';

const wordOne = input();
const wordTwo = input();

const result = areAnagrams(wordOne, wordTwo);

output(result);