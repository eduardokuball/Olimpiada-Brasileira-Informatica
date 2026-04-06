import { input, output } from '../../../../utils/io.js';
import countPaintedCubes from '../A.js';

const dimension = Number(input());

const result = countPaintedCubes(dimension);

result.forEach(r => output(r));