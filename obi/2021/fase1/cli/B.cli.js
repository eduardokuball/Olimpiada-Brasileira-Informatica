import { input, output } from '../../../../utils/io.js';
import calculateFinalSum from '../B.js';

const quantity = Number(input());

const numbers = [];

for (let i = 0; i < quantity; i++) {
    numbers.push(Number(input()));
}

const result = calculateFinalSum(numbers);

output(result);