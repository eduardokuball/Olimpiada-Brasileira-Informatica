import { input, output } from '../../../../utils/io.js';
import findHousesWithSum from '../B.js';

const n = Number(input());

const numbersOfHomes = [];

for (let i = 0; i < n; i++) {
    numbersOfHomes.push(Number(input()));
}

const targetSum = Number(input());

const result = findHousesWithSum(numbersOfHomes, targetSum);

if (result.length > 0) {
    output(result.join(' '));
}