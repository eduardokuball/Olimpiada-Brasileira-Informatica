import { input, output } from '../../../../utils/io.js';
import minTourTime from '../C.js';

const [roomsQuantity, hallwaysQuantity] = input()
    .split(' ')
    .map(Number);

const roomsWeights = input()
    .split(' ')
    .map(Number);

const edges = [];

for (let i = 0; i < hallwaysQuantity; i++) {
    const [roomA, roomB, weight] = input()
        .split(' ')
        .map(Number);

    edges.push([roomA, roomB, weight]);
}

const result = minTourTime(roomsQuantity, roomsWeights, edges);

output(result);