import { input, output } from '../../../../utils/io.js';
import solve from '../C.js';

const [wordsInDic, wordsInAnalisys] = input()
    .split(' ')
    .map(Number);

const dic = [];
const words = [];

for (let i = 0; i < wordsInDic; i++) {
    dic.push(input());
}

for (let i = 0; i < wordsInAnalisys; i++) {
    words.push(input());
}

const result = solve(wordsInDic, wordsInAnalisys, dic, words);

result.forEach((e) => {
    output(e);
})