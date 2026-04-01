import { input, output } from '../../../../utils/io.js';
import calculateTotalCost from '../A.js';

const positions = input().split(' ').map(Number);

const result = calculateTotalCost(positions);

output(result);