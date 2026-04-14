import { input, output } from '../../../../utils/io.js';
import maximin from '../D.js';

const [participants, min, max] = input().split(' ', 3).map(Number);
const numbers = input().split(' ', participants).map(Number);

output(maximin(min, max, numbers));
