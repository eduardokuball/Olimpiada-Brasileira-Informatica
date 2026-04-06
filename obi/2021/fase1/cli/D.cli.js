import { input, output } from '../../../../utils/io.js';
import countMissingCards from '../D.js';

const cards = input();

const result = countMissingCards(cards);

result.forEach(r => output(r));