import { input, output } from '../../../utils/io.js';
import findCommonPassword from '../E.js';

function generateAssociationMap(association) {
    const [
        a1, a2,
        b1, b2,
        c1, c2,
        d1, d2,
        e1, e2
    ] = association;

    return {
        'A': [a1, a2],
        'B': [b1, b2],
        'C': [c1, c2],
        'D': [d1, d2],
        'E': [e1, e2]
    };
}

const associations = Number(input());

const associationsPasswords = [];

for (let i = 0; i < associations; i++) {
    const lineInput = input().split(' ');

    const association = lineInput.slice(0, 10);
    const password = lineInput.slice(10);

    associationsPasswords.push({
        association: generateAssociationMap(association),
        password
    });
}

const result = findCommonPassword(associationsPasswords);

output(result);