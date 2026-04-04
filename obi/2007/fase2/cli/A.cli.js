import { input, output } from '../../../../utils/io.js';
import distributeCalls from '../A.js';

const [sellers, calls] = input()
    .split(' ')
    .map(Number);

const callsTimes = [];

for (let i = 0; i < calls; i++) {
    callsTimes.push(Number(input()));
}

const result = distributeCalls(sellers, callsTimes);

for (let i = 0; i < sellers; i++) {
    output(`${i + 1} ${result[i]}`);
}