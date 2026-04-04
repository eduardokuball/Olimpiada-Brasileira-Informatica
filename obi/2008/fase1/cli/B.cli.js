import { input, output } from '../../../../utils/io.js';
import convertToNumber from '../B.js';

const criptografedNumber = input().toUpperCase();

const result = convertToNumber(criptografedNumber);

output(result);