import { input, output } from '../../../../utils/io.js';
import countBootPairs from '../C.js';

const quantity = Number(input());
const boots = [];

for (let i = 0; i < quantity; i++) {
    const [size, foot] = input().split(' ');
    boots.push({ size, foot });
}

const result = countBootPairs(boots);

output(result);