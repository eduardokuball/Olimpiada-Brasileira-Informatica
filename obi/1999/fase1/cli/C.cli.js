import { input, output } from '../../../../utils/io.js';
import crosswords from '../C.js';

const [ rows, columns ] = input().split(' ', 2).map(e => parseInt(e));
const matrix = [];

for (let i = 0; i < rows; i++) {
    const line = input().split('', columns);
    matrix.push(line);
}

function formattedOutput(horizontal, vertical) {
    const printLine = ({ number, word }) =>
        output(`   ${number}.  ${word.toUpperCase()}`);

    if (horizontal.length > 0) {
        output('Horizontais:');
        horizontal.forEach(printLine);
    }

    if (vertical.length > 0) {
        output('Verticais:');
        vertical.forEach(printLine);
    }
}

const { horizontal, vertical } = crosswords(matrix);
formattedOutput(horizontal, vertical);
