import { input, output } from '../../../utils/io.js';
import bestStudents from '../B.js';

const students = Number(input());

const report = [];

for (let i = 0; i < students; i++) {
    const [student, note] = input().split(' ').map(Number);
    report.push({ student, note });
}

const result = bestStudents(report);

output(result);