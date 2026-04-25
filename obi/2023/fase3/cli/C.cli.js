import { input, output } from '../../../../utils/io.js';
import mechanicalWorkshop from '../C.js';

const [N, M] = input().split(' ', 2).map(Number);
const cars = input().split(' ', N).map(Number);
const mechanics = input().split(' ', M).map(Number);
output(mechanicalWorkshop(cars, mechanics));
