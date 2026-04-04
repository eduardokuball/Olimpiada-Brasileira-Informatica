import { input, output } from '../../../../utils/io.js';
import calculateRotation from '../E.js';

const directions = input().split(' ').map(e => e.toLowerCase());

const result = calculateRotation(directions);

output(result);