import { input, output } from '../../../../utils/io.js';
import countMissingStickers from '../B.js';

const [n, c, m] = input().split(' ').map(Number);

const stampedStickers = input().split(' ').map(Number);
const boughtStickers = input().split(' ').map(Number);

const result = countMissingStickers(stampedStickers, boughtStickers);

output(result);