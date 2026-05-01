import { input, output } from '../../../../utils/io.js';
import randomChess from '../A.js';

const [N, T] = input().split(' ', 2).map(Number);
output(randomChess(N, T));
