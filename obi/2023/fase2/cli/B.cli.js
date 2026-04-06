import { input, output } from '../../../../utils/io.js';
import countGroupViolations from '../B.js';

const [students, togetherCount, separateCount] = input().split(' ').map(Number);

const togetherPairs = [];
for (let i = 0; i < togetherCount; i++) {
    const [a, b] = input().split(' ').map(Number);
    togetherPairs.push([a, b]);
}

const separatePairs = [];
for (let i = 0; i < separateCount; i++) {
    const [a, b] = input().split(' ').map(Number);
    separatePairs.push([a, b]);
}

const groups = [];
for (let i = 0; i < students / 3; i++) {
    const group = input().split(' ').map(Number);
    groups.push(group);
}

const result = countGroupViolations(groups, togetherPairs, separatePairs);

output(result);