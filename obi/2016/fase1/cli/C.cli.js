import { input, output } from '../../../../utils/io.js';
import countFloodedSections from '../C.js';

const sections = Number(input());

const heights = [];

for (let i = 0; i < sections; i++) {
    heights.push(Number(input()));
}

const result = countFloodedSections(heights);

output(result);