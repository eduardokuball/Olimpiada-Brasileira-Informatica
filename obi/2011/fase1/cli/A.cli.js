import { input, output } from '../../../../utils/io.js';
import countCoveredArea from '../A.js';

const fishingNet = Number(input());

const rectangles = [];

for (let i = 0; i < fishingNet; i++) {
    const [xi, xf, yi, yf] = input()
        .split(' ')
        .map(Number);

    rectangles.push([xi, xf, yi, yf]);
}

const result = countCoveredArea(fishingNet, rectangles);

output(result);