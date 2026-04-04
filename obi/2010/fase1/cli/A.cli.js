import { input, output } from '../../../../utils/io.js';
import getNextHalleyYear from '../A.js';

const year = Number(input());

const result = getNextHalleyYear(year);

output(result);