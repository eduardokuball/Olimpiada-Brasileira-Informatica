import { input, output } from '../../../../utils/io.js';
import choffeShop from '../B.js';

const min = parseInt(input());
const max = parseInt(input());
const capacity = parseInt(input());
const dose = parseInt(input());
output(choffeShop(min, max, capacity, dose) ? 'S' : 'N');
