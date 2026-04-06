import { input, output } from '../../../../utils/io.js';
import processMatrixOperations from '../C.js';

const [rows, cols, commandsQuantity] = input().split(' ').map(Number);

const commands = [];

for (let i = 0; i < commandsQuantity; i++) {
    const [command, a, b] = input().split(' ');
    commands.push([command, Number(a), Number(b)]);
}

const result = processMatrixOperations(rows, cols, commands);

result.forEach(row => output(row.join(' ')));