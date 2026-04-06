import { input, output } from '../../../../utils/io.js';
import countContractions from '../B.js';

const n = Number(input());

const values = input()
    .split(' ')
    .map(Number);

const result = countContractions(values);

output(result);