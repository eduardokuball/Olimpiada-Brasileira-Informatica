import { input, output } from '../../../../utils/io.js';
import calculateTiles from '../A.js';

const width = Number(input());
const length = Number(input());

const result = calculateTiles(width, length);

result.forEach(r => output(r));