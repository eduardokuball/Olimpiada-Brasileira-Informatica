import { input, output } from '../../../utils/io.js';
import bestGames from '../D.js';

const quantityGames = Number(input());
const lines = [];

for (let i = 0; i < quantityGames; i++) {
    lines.push(input());
}

const result = bestGames(quantityGames, lines);

output(result);