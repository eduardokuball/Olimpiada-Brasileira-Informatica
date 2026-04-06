import { input, output } from '../../../../utils/io.js';
import getPlateType from '../C.js';

const plate = input();

const result = getPlateType(plate);

output(result);