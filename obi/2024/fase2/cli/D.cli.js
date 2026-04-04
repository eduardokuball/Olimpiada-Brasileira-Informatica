import { input, output } from '../../../../utils/io.js';
import powerGame from '../D.js';

const [rows, cols] = input().split(' ', 2).map(Number);
const board = [];

for (let i = 0; i < rows; i++) {
    const row  = input().split(' ', cols).map(Number);
    board.push(row);
}

const formatOutput = res => res.forEach(r => output(r.join(' ')));
formatOutput(powerGame(board));
