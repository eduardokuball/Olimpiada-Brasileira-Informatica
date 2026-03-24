import { input, output } from '../../../utils/io.js';
import calculate from '../E.js';



const quantity = parseInt(input());
const expression = input()
    .split('');

const result = calculate(expression);

output(result);