import { input, output } from '../../../../utils/io.js';
import longestTunnel from '../E.js';

const [cityOfOrigin, destinationCity] = input().split(' ').map(Number);

const lines = [];

while (true) {
    const line = input();
    if (!line) break;
    lines.push(line);
}

const result = longestTunnel(cityOfOrigin, destinationCity, lines);

output(`altura maxima: ${result}`);