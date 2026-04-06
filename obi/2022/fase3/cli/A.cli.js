import { input, output } from '../../../../utils/io.js';
import balancing from '../A.js';

const n = Number(input());

const weights = [];

for(var i = 0; i < n; i++){
    const weight = Number(input());
    weights.push(weight);
}

const result = balancing(weights);

result.forEach((r) => {
    output(r);
})