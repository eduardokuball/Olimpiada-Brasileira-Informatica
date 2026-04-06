import { input, output } from '../../../../utils/io.js';
import isMessageValid from '../B.js';

const [alphabetSize, messageSize] = input().split(' ').map(Number);

const alienAlphabet = input();
const message = input();

const result = isMessageValid(alienAlphabet, message);

output(result);