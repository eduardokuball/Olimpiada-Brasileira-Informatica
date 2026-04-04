import { input, output } from '../../../../utils/io.js';
import getMinimumDistance from '../D.js';

const [,sale] = input().split(' ').map(Number);

const buildingsArr = input().split(' ').map(Number);

const result = getMinimumDistance(buildingsArr, sale);

output(result);