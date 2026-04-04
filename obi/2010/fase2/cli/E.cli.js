import { input, output } from '../../../../utils/io.js';
import countVisibleStars from '../E.js';

const area = Number(input());
const stars = Number(input());

const frequencies = [];

for (let i = 0; i < stars; i++) {
    frequencies.push(Number(input()));
}

const result = countVisibleStars(area, stars, frequencies);

output(result);