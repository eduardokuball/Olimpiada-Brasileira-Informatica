import { input, output } from '../../../utils/io.js';
import rankPlayers from '../F.js';

const quantity = Number(input());

const playersData = [];

for (let i = 0; i < quantity; i++) {
    const player = input();
    const results = input().split(' ').map(Number);

    playersData.push({ player, results });
}

const result = rankPlayers(playersData);


result.forEach(line => output(line));