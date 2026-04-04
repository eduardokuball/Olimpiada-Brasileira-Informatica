import { input, output } from '../../../../utils/io.js';
import gameResult from '../A.js';

const rounds = Number(input());

const roundsData = [];

for (let i = 0; i < rounds; i++) {
    const cards = input()
        .split(' ')
        .map(Number);

    roundsData.push(cards);
}

const [adalberto, bernadete] = gameResult(roundsData);

output(`${adalberto} ${bernadete}`);