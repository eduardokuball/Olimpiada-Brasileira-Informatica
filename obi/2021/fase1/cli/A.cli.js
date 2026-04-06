import { input, output } from '../../../../utils/io.js';
import determineGroup from '../A.js';

const results = [];

for (let i = 0; i < 6; i++) {
    results.push(input().toUpperCase());
}

const result = determineGroup(results);

output(result);