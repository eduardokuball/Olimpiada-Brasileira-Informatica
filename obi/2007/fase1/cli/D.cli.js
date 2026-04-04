import { input, output } from '../../../../utils/io.js';
import isPerfectFolders from '../D.js';

const [tabs, foldersQuantity] = input()
    .split(' ')
    .map(Number);

const folders = [];

for (let i = 0; i < foldersQuantity; i++) {
    folders.push(Number(input()));
}

const result = isPerfectFolders(tabs, folders);

output(result);