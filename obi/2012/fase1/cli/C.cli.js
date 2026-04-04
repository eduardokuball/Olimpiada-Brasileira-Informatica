import { input, output } from '../../../../utils/io.js';
import countUniqueStudents from '../C.js';

const n = Number(input());

const presenceList = [];

for (let i = 0; i < n; i++) {
    presenceList.push(Number(input()));
}

const result = countUniqueStudents(presenceList);

output(result);