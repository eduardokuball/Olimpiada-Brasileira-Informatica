import { input, output } from '../../../../utils/io.js';
import simultaneousPeople from '../B.js';

const persons = parseInt(input());
const timeEntrance = input()
    .split(' ',persons)
    .map(e => parseInt(e));
const timeOut = input()
    .split(' ',persons)
    .map(e => parseInt(e));

const result = simultaneousPeople(timeEntrance,timeOut,persons);

output(`pessoas: ${result}`);