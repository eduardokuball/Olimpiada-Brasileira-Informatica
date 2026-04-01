import { input, output } from '../../../../utils/io.js';
import canFitPhotosInPage from '../A.js';

const [pageHeight, pageWidth] = input().split(' ').map(Number);

const photos = [];

for (let i = 0; i < 2; i++) {
    const [width, height] = input().split(' ').map(Number);
    photos.push({ width, height });
}

const result = canFitPhotosInPage(photos, pageHeight, pageWidth);

output(result);