import { input, output } from '../../../../utils/io.js';
import countRectangles from '../A.js';

const trees = Number(input());

const result = countRectangles(trees);

output(result);