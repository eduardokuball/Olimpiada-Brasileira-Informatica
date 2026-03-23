import Queue from '../../../utils/Queue.js';

let n = parseInt(prompt());
let corners = Array.from({ length: n }, () => []);

for (let i = 0; i < n - 1; i++) {
    let [a, b, c] = prompt()
        .split(' ')
        .map((e => {
            return parseInt(e);
        }));
    a -= 1;
    b -= 1;
    corners[a].push([a, b, c]);
    corners[b].push([b, a, c]);
}

let groups = Array(n).fill(1);
let groupId = Array.from({ length: n }, (_, i) => i);

let queue = new Queue();
for (let edge of corners[0]) {
    queue.enqueue(edge);
}
let countedVertices = new Set();
countedVertices.add(0);

while (!queue.isEmpty()) {
    let [origin, dest, type] = queue.dequeue();

    if (countedVertices.has(dest)) continue;

    countedVertices.add(dest);
    for (let edge of corners[dest]) {
        queue.enqueue(edge);
    }

    if (type === 1) continue;

    groupId[dest] = groupId[origin];
    groups[groupId[origin]] += 1;
    groups[dest] -= 1;
}

let result = 0;
let counted = 0;

for (let count of groups) {
    counted += count;
    result += count * (n - counted);
}

console.log(result);
