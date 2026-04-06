import { input, output } from '../../../../utils/io.js';
import maximizeWhitePieces from '../D.js';

const [rows, cols] = input().split(' ').map(Number);

const pieces = Number(input());

const blackPieces = [];

for (let i = 0; i < pieces; i++) {
    blackPieces.push(input().split(' ').map(Number));
}

const result = maximizeWhitePieces(rows, cols, blackPieces);

output(result);