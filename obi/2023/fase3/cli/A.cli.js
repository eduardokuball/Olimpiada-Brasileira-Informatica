import { input, output } from '../../../../utils/io.js';
import canBalanceWeights from '../A.js';

const weights = input().split(' ').map(Number);

const result = canBalanceWeights(weights);

output(result);