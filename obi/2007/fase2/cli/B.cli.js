import { input, output } from '../../../../utils/io.js';
import maxPizza from '../B.js';

const quantity = Number(input());

const slices = input()
    .split(' ',quantity)
    .map(Number);

const result = maxPizza(slices);

output(result);