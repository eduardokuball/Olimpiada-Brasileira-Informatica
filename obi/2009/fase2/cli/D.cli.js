import { input, output } from '../../../../utils/io.js';
import getBestTrio from '../D.js';

const [musics, pares] = input()
    .split(' ')
    .map(Number);

const edges = [];

for (let i = 0; i < pares; i++) {
    const [v1, v2, time] = input()
        .split(' ')
        .map(Number);

    edges.push([v1, v2, time]);
}

const result = getBestTrio(musics, pares, edges);

output(result);