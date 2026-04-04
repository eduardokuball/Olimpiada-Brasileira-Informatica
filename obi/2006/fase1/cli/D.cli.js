import { input, output } from '../../../../utils/io.js';
import game from '../D.js';

const quantity = Number(input());

const cards = input()
    .split(' ')
    .map(Number);

const result = game(cards, quantity);

output(result);