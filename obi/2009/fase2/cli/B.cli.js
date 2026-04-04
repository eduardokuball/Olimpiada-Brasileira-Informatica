import { input, output } from '../../../../utils/io.js';
import processArrayCommands from '../B.js';

const [size, commands] = input()
    .split(' ')
    .map(Number);

const commandsList = [];

for (let i = 0; i < commands; i++) {
    const [command, indexx, indexy] = input().split(' ');
    commandsList.push([command, Number(indexx), Number(indexy)]);
}

const result = processArrayCommands(size, commands, commandsList);

console.log(result);

result.forEach((e) => {
    output(e);
})