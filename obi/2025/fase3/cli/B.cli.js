import { input, output } from '../../../../utils/io.js';
import stairway from '../B.js';

const N = parseInt(input());
const slabs = input().split(' ', N).map(Number);
output(stairway(slabs).join(' '));
