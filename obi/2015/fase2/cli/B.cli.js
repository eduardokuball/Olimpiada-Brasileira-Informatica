import { input, output } from '../../../../utils/io.js';
import isMovementPossible from '../B.js';

const n = Number(input());
const [l1, c1] = input().split(' ').map(Number);
const [l2, c2] = input().split(' ').map(Number);

const result = isMovementPossible(n, l1, c1, l2, c2);

output(result);