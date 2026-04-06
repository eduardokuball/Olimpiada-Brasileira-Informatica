import { input, output } from '../../../../utils/io.js';
import barChart from '../D.js';

const N = parseInt(input());
const votes = input().split(' ', N).map(Number);
barChart(votes).forEach(line => output(line.join(' ')));
