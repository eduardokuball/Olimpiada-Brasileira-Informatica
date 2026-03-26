import { input, output } from '../../../utils/io.js';
import checkWeb from '../B.js';
import che from '../B.js';

const [stations, transmissionLines] = input()
    .split(' ')
    .map(Number);

const conexoes = [];

for (let i = 0; i < transmissionLines; i++) {
    const [x, y] = input().split(' ').map(Number);
    conexoes.push([x, y]);
}

const result = checkWeb(stations, conexoes);

output(result);