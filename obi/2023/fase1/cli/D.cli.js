import { input, output } from '../../../../utils/io.js';
import countValidTours from '../D.js';

const [rooms, tunnelCount] = input().split(' ').map(Number);

const tunnels = [];

for (let i = 0; i < tunnelCount; i++) {
    const [a, b] = input().split(' ').map(Number);
    tunnels.push([a, b]);
}

const toursCount = Number(input());

const tours = [];

for (let i = 0; i < toursCount; i++) {
    const line = input().split(' ').map(Number);
    line.shift(); 
    tours.push(line);
}

const result = countValidTours(tunnels, tours);

output(result);