import { input, output } from '../../../../utils/io.js';
import simultaneousPeople from '../B.js';

const lines = [];

while (true) {
    const line = input();
    if (!line) break;
    lines.push(line);
}

const result = simultaneousPeople(lines);

output(`pessoas: ${result}`);