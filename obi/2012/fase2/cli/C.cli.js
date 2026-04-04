import { input, output } from '../../../../utils/io.js';
import getMinimumTime from '../C.js';

const [roundabouts, entrance, exit, streets] = input().split(' ').map(Number);

const streetsList = [];

for (let i = 0; i < streets; i++) {
    const [a, b, t] = input().split(' ').map(Number);
    streetsList.push([a, b, t]);
}

const result = getMinimumTime(roundabouts, entrance, exit, streetsList);

output(result);