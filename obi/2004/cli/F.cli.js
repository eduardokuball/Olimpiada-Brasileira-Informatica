import { input, output } from '../../../utils/io.js';
import solveFriendships from '../F.js';

const quantity = Number(input());

const friends = input()
    .split(' ')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1));

const requirementsData = [];

for (let i = 0; i < quantity; i++) {
    const line = input().split(' ');

    const name = line[0];
    const requirement = Number(line[1]);

    const requirements = requirement > 0
        ? line.slice(2).map(w => w.charAt(0).toUpperCase() + w.slice(1))
        : [];

    requirementsData.push({ name, requirements });
}

const result = solveFriendships(quantity, friends, requirementsData);

output(result);