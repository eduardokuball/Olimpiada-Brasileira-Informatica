import { input, output } from '../../../utils/io.js';
import draw from '../B.js';

const guests = input();
const firstcome = input().split(' ', guests).map(e => parseInt(e));;

const result = draw(guests,firstcome);

output(result);