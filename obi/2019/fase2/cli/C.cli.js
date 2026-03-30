import { input, output } from '../../../../utils/io.js';
import values from '../C.js';

const n = Number(input());

const valuesData = [];

for (let i = 0; i < n; i++) {
    const [grams, price] = input()
        .split(' ')
        .map(Number);

    valuesData.push([grams, price]);
}

const result = values(valuesData);

output(result);