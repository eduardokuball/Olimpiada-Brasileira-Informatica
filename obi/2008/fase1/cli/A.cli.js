import { input, output } from '../../../../utils/io.js';
import calculateApproved from '../A.js';

const [participants, requiredNote] = input()
    .split(' ')
    .map(Number);

const grades = [];

for (let i = 0; i < participants; i++) {
    grades.push(
        input().split(' ').map(Number)
    );
}

const result = calculateApproved(requiredNote, grades);

output(result);