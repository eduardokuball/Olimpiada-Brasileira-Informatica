import MinHeap from '../../../utils/MinHeap.js';

const [n, m] = prompt()
    .split(' ')
    .map((e) => {
        return parseInt(e);
    });

const numDependencies = Array(n).fill(0);
const dependents = Array.from({ length: n }, () => []);

for (let i = 0; i < m; i++) {
    const [a, b] = prompt()
        .split(' ')
        .map((e) => {
            return parseInt(e);
        });
    numDependencies[b] += 1;
    dependents[a].push(b);
}

const queue = new MinHeap();
for (let i = 0; i < n; i++) {
    if (numDependencies[i] === 0) {
        queue.push(i);
    }
}

const result = [];

while (!queue.isEmpty()) {
    const task = queue.pop();
    result.push(task);
    for (const dep of dependents[task]) {
        numDependencies[dep] -= 1;
        if (numDependencies[dep] === 0) {
            queue.push(dep);
        }
    }
}

if (result.length === n) {
    for (const task of result) {
        console.log(task);
    }
} else {
    console.log('*');
}