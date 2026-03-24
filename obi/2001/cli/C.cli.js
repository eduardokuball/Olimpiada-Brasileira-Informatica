import { input, output } from '../../../utils/io.js';
import findBestVillage from '../C.js';

const villagesQuantity = Number(input());

const edges = [];

for (let i = 0; i < villagesQuantity - 1; i++) {
    const [villageA, villageB] = input().split(' ').map(Number);
    edges.push([villageA, villageB]);
}

const result = findBestVillage(villagesQuantity, edges);

output(result);