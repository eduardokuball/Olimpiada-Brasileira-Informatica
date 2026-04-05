import { input, output } from '../../../../utils/io.js';
import canArrangeBoxes from '../B.js';

const boxs = Number(input());
const weights = input().split(' ').map(Number);

const result = canArrangeBoxes(weights);

output(result);