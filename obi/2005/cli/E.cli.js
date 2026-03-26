import { input, output } from '../../../utils/io.js';
import evaluateHand from '../E.js';

const cards = input()
    .split(' ')
    .map(Number);

const result = evaluateHand(cards);

output(result);