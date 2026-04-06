import { input, output } from '../../../../utils/io.js';
import calculateInfluenceIndex from '../C.js';

const messages = Number(input());

const messageIndexes = [];

for (let i = 0; i < messages; i++) {
    messageIndexes.push(Number(input()));
}

const result = calculateInfluenceIndex(messageIndexes);

output(result);