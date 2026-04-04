import { input, output } from '../../../../utils/io.js';
import countShipsHit from '../B.js';

const [lines, columns] = input()
    .split(' ')
    .map(Number);

const linesData = [];

for (let i = 0; i < lines; i++) {
    linesData.push(input());
}

const commands = Number(input());

const commandsList = [];

for (let i = 0; i < commands; i++) {
    const [x, y] = input()
        .split(' ')
        .map(Number);

    commandsList.push([x, y]);
}

const result = countShipsHit(lines, columns, linesData, commandsList);

output(result);