import { input, output } from '../../../../utils/io.js';
import calculateRotations from '../A.js';

const lines = [];

while (true) {
    const line = input();
    if (!line) break;
    lines.push(line);
}

const result = calculateRotations(lines);

output(`rotacoes: ${result}`);