import { input, output } from '../../../utils/io.js';
import getMoves from '../C.js';

const disks = Number(input());

const result = getMoves(disks);

output(result);