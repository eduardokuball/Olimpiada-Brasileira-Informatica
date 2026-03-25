import { input, output } from '../../../utils/io.js';
import temperatureAnalysis from '../A.js';

const [meditions, interval] = input().split(' ').map(Number);

const temperatures = [];

for (let i = 0; i < meditions; i++) {
    temperatures.push(Number(input()));
}

const result = temperatureAnalysis(interval, temperatures);

output(result);