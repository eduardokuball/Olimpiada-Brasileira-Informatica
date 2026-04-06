import { input, output } from '../../../../utils/io.js';
import calculateAnswerTimes from '../C.js';

const registers = Number(input());

const data = [];

for (let i = 0; i < registers; i++) {
    const [type, value] = input().split(' ');
    data.push([type, Number(value)]);
}

const result = calculateAnswerTimes(data);

result.forEach(r => output(r));