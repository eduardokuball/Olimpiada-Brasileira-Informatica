import MinHeap from '../../../utils/MinHeap.js';

export default function getTopologicalOrder(n, dependenciesList = []) {
    const numDependencies = Array(n).fill(0);
    const dependents = Array.from({ length: n }, () => []);

    for (const [a, b] of dependenciesList) {
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
        return result;
    }

    return ['*'];
}