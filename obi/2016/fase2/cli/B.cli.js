import { input, output } from '../../../../utils/io.js';
import splitTeamsByDislikes from '../B.js';

const students = Number(input());
const requirements = [];

for (let i = 0; i < students; i++) {
    const values = input().split(' ').map(Number);

    requirements.push({
        id: i + 1,
        requirement: values.slice(1)
    });
}

const result = splitTeamsByDislikes(requirements);

output(result[0].join(' '));
output(result[1].join(' '));