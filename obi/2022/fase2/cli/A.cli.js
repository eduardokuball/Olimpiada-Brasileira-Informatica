import { input, output } from '../../../../utils/io.js';
import calculateFuelToBuy from '../A.js';

const consumption = Number(input());
const distance = Number(input());
const fuel = Number(input());

const result = calculateFuelToBuy(consumption, distance, fuel);

output(result.toFixed(1));