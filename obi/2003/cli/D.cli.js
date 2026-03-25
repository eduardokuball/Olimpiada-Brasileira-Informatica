import { input, output } from '../../../utils/io.js';
import findMedianPoint from '../D.js';

const storesQuantity = Number(input());

const stores = [];

for (let i = 0; i < storesQuantity; i++) {
    const [x, y] = input().split(' ').map(Number);
    stores.push({ x, y });
}

const result = findMedianPoint(stores);

output(result);