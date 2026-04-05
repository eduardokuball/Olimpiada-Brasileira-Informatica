import { input, output } from '../../../../utils/io.js';
import validateBalls from '../E.js';

const balls = input().split(' ').map(Number);

const result = validateBalls(balls);

output(result);