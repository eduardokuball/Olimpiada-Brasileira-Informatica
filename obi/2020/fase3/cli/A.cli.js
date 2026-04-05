import { input, output } from '../../../../utils/io.js';
import findRectangleDimensions from '../A.js';

const blueSquares = Number(input());
const whiteSquares = Number(input());

const result = findRectangleDimensions(blueSquares, whiteSquares);

output(result.join(' '));