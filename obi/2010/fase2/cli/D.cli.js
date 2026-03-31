import { input, output } from '../../../../utils/io.js';
import getMatrixValue from '../D.js';

const dimensionsMatrix = Number(input());

const [p, q, r, s, x, y] = input()
    .split(' ')
    .map(Number);

const search = input()
    .split(' ')
    .map(Number);

const result = getMatrixValue(
    dimensionsMatrix,
    p, q, r, s, x, y,
    search
);

output(result);