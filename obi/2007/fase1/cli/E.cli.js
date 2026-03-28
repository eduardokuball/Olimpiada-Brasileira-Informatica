import { input, output } from '../../../../utils/io.js';
import isBalanced from '../E.js';

const mobilesQuantity = Number(input());

const pairs = [];

for (let i = 0; i < mobilesQuantity; i++) {
    const [mobileId, parentId] = input()
        .split(' ')
        .map(Number);

    pairs.push([mobileId, parentId]);
}

const result = isBalanced(pairs);

output(result);