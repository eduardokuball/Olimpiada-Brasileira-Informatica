import { input, output } from '../../../../utils/io.js';
import findMatchingWord from '../E.js';

const N = Number(input());
const words = [];

for (let i = 0; i < N; i++) {
    words.push(input());
}

const result = findMatchingWord(words);

output(result);