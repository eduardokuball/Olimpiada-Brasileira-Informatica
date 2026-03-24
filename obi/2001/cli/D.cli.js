import { input, output } from '../../../utils/io.js';
import mergeIntervals from '../D.js';

const [meters, iceCreamMaker] = input().split(' ').map(Number);

const occupations = [];

for (let i = 0; i < iceCreamMaker; i++) {
    const [start, end] = input().split(' ').map(Number);
    occupations.push({ start, end });
}

const result = mergeIntervals(occupations);

result.forEach((s) => {
    output(`${s.start}  ${s.end}`);
});