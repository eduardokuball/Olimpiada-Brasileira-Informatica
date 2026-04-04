import { input, output } from '../../../../utils/io.js';
import getMinimumPathSize from '../C.js';

const n = Number(input());

const filePaths = [];

for (let i = 0; i < n; i++) {
    filePaths.push(input().trim());
}

const result = getMinimumPathSize(filePaths);

output(result);