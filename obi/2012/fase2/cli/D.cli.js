import { input, output } from '../../../../utils/io.js';
import countPeopleWaitingOver20 from '../D.js';

const [c, n] = input().split(' ').map(Number);

const people = [];

for (let i = 0; i < n; i++) {
    const [t, d] = input().split(' ').map(Number);
    people.push({ arrival: t, duration: d });
}

const result = countPeopleWaitingOver20(c, people);

output(result);