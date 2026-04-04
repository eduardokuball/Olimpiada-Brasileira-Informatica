import { input, output } from '../../../../utils/io.js';
import operations from '../C.js';

const [bucketsCount, operationsCount] = input()
    .split(' ')
    .map(Number);

const buckets = input().split(" ").map(Number).map(n => [n]);

const ops = [];

for (let i = 0; i < operationsCount; i++) {
    const parts = input().split(' ').map(Number);

    if (parts[0] === 1) {
        const [, ball, index] = parts;

        ops.push({
            type: 1,
            ball: ball,
            i: index - 1
        });

    } else {
        const [, start, end] = parts;

        ops.push({
            type: 2,
            start: start - 1,
            end: end - 1
        });
    }
}

const result = operations(buckets, ops);

result.forEach((e) => {
    output(e);
})