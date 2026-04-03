import { input, output } from '../../../../utils/io.js';
import isCodeBalanced from '../B.js';

const lines = Number(input());

const code = [];

for (let i = 0; i < lines; i++) {
    const line = input().split("");
    code.push(...line);
}

const result = isCodeBalanced(code);

output(result);