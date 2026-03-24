import { input, output } from '../../../utils/io.js';
import canFormGame from '../B.js';

const quantity = Number(input());

const pieces = [];
const game = [];

for (let i = 0; i < quantity; i++) {
    const piece = input().replace(' ', '');

    if (i === 0) {
        game.push(piece);
    } else {
        pieces.push(piece);
    }
}

const result = canFormGame(pieces, game);

output(result);