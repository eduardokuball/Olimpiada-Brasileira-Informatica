import { input, output } from '../../../../utils/io.js';
import solve from '../E.js';

const [strips, competitors] = input()
    .split(' ')
    .map(Number);

const powers = input()
    .split(' ')
    .map(Number);

const pontuations = input()
    .split(' ')
    .map(Number);

const ogros = input()
    .split(' ')
    .map(Number);

const result = solve(strips, powers, pontuations, ogros);

output(result.join(' '));