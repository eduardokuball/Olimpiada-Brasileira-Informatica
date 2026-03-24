import { input, output } from '../../../../utils/io.js';
import longestTunnel from '../E.js';

const [cityOfOrigin, destinationCity] = input().split(' ').map(Number);

const roads = [];

while (true) {
    const line = input();
    if (!line) break;

    const [cityOfStart, cityOfEnd, tunnelHeight] = line.split(' ').map(Number);

    if (cityOfStart === 0 || cityOfEnd === 0) break;

    roads.push({
        cityOfStart,
        cityOfEnd,
        tunnelHeight
    });
}

const result = longestTunnel(cityOfOrigin, destinationCity, roads);

output(`altura maxima: ${result}`);