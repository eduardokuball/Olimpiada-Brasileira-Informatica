import { input, output } from '../../../../utils/io.js';
import getCutOffGrade from '../B.js';

const [quantityNotes, minimumApproved] = input().split(' ').map(Number);

const grades = input()
    .split(' ')
    .slice(0, quantityNotes)
    .map(Number);

const result = getCutOffGrade(grades, minimumApproved);

output(result);