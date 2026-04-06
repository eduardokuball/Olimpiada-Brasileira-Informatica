import { input, output } from '../../../../utils/io.js';
import Ogro from '../A.js';

const left = Number(input());
const right = Number(input());

const result = Ogro(left, right);

output(result);