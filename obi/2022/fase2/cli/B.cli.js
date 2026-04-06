import { input, output } from '../../../../utils/io.js';
import generateLayeredSquare from '../B.js';

const size = Number(input());

const result = generateLayeredSquare(size);

result.forEach(row => output(row.join(' ')));