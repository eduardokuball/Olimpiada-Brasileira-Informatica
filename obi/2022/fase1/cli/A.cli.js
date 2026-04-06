import { input, output } from '../../../../utils/io.js';
import calculateStayTotal from '../A.js';

const daily = Number(input());
const increase = Number(input());
const arrive = Number(input());

const result = calculateStayTotal(daily, increase, arrive);

output(result);