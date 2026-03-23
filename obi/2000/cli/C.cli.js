import { input, output } from '../../../utils/io.js';
import bills from '../C.js';

const value = input();

const result = bills(value);

output(result);