import { input, output } from '../../../../utils/io.js';
import getMaxCandies from '../C.js';

const dimension = Number(input());

const game = [];

for (let i = 0; i < dimension; i++) {
    game.push(input().split(''));
}

const result = getMaxCandies(game);

output(result);