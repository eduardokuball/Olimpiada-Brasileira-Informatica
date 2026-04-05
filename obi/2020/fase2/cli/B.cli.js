import { input, output } from '../../../../utils/io.js';
import findBestFrame from '../B.js';

const [pictureHeight, pictureWidth] = input().split(' ').map(Number);

const framesQuantity = Number(input());

const frames = [];

for (let i = 0; i < framesQuantity; i++) {
    const dimensions = input().split(' ').map(Number);
    frames.push(dimensions);
}

const result = findBestFrame(pictureHeight, pictureWidth, frames);

output(result);