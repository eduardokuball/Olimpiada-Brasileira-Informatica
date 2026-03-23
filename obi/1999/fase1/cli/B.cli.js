import { input, output } from '../../../../utils/io.js';
import images from '../B.js';

const [ rows, columns ] = input().split(' ', 2).map(e => parseInt(e));
const image = [];

// Push input lines to image array:
for (let i = 0; i < rows; i++) {
    const row = input().split('', columns).map(e => parseInt(e));
    image.push(row);
};

output(`Numero de construcoes: ${images(image)}`);
