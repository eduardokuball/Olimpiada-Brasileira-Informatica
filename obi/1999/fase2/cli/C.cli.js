import { input, output } from '../../../../utils/io.js';
import simulateGame from '../C.js';

const lines = [];

while (true) {
    const line = input();
    if (!line) break;
    lines.push(line);
}

const result = simulateGame(lines);

output(`turnos: ${result.turns}`);
output(`vencedor: ${result.winner}`);