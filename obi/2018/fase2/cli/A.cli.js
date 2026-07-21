import { input, output } from '../../../../utils/io.js';
import runAway from '../A.js';

const [rows, cols] = input().split(' ', 2).map(Number);
const start = input().split(' ', 2).map(Number);
const end = input().split(' ', 2).map(Number);

output(runAway(rows, cols, start, end));
