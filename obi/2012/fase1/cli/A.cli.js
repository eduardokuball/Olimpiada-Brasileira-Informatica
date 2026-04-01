import { input, output } from '../../../../utils/io.js';
import canPassThroughDoor from '../A.js';

const [a, b, c] = input().split(' ').map(Number);
const [doorHeight, doorWidth] = input().split(' ').map(Number);

const result = canPassThroughDoor(a, b, c, doorHeight, doorWidth);

output(result);