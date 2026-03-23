import { input, output } from '../../../utils/io.js';
import draw from '../B.js';

const guests = input();
const firstcome = input();
 

const result = draw(guests,firstcome);

output(result);