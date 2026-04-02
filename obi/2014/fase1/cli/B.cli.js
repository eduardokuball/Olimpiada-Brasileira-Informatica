import { input, output } from '../../../../utils/io.js';
import decryptPhrase from '../B.js';

const words = input().split(' ');

const result = decryptPhrase(words);

output(result);