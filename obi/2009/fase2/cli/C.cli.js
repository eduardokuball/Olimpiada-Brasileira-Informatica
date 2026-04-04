import { input, output } from '../../../../utils/io.js';
import organizeAuditorium from '../C.js';

const [lines, columns] = input()
    .split(' ')
    .map(Number);

const auditorium = [];

for (let i = 0; i < lines; i++) {
    const chairs = input()
        .split(' ')
        .map(Number);

    auditorium.push(chairs);
}

const result = organizeAuditorium(lines, columns, auditorium);

result.forEach((e) => {
    output(e);
})