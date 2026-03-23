import { input, output } from '../../../utils/io.js';
import findIntersection from '../E.js';

const quantity = input();

const regions = [];

for(var i = 0; i < quantity; i++){
    regions.push(input());
};

const result = findIntersection(regions);

output(result);