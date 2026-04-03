import { input, output } from '../../../../utils/io.js';
import isDifferent from '../A.js';

const [w, x, y, z] = input().split(' ').map(Number);

const result = isDifferent(w, x, y, z);

output(result);