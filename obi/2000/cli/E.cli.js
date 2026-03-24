import { input, output } from '../../../utils/io.js';
import findIntersection from '../E.js';

const quantity = parseInt(input());

const regions = [];

for (let i = 0; i < quantity; i++) {
    const line = input(); 
    
    const parsed = line.split(" ").map(e => parseInt(e));
    
    regions.push(parsed);
}

const result = findIntersection(regions);

output(result);