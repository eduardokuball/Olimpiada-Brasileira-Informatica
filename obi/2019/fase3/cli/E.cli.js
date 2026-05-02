import { input, output } from '../../../../utils/io.js';
import nametags from '../E.js';

const [N, K, C] = input().split(' ', 3).map(Number);
const numbers = input().split(' ', N).map(Number);
output(nametags(K, C, numbers));
