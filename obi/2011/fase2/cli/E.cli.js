import { input, output } from '../../../../utils/io.js';
import getGameLeafNodes from '../E.js';

const n = Number(input());
const game = input().split(' ').slice(0, n).join(' ');

const result = getGameLeafNodes(game);

output(result);