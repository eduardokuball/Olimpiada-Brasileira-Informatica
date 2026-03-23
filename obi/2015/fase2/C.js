import MinHeap from '../../../utils/MinHeap.js';

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

const n = parseInt(prompt());

const grid = [];
for (let i = 0; i < n; i++) {
    grid.push(prompt()
    .split(' ')
    .map((e) => {
        return parseInt(e);
    }));
}

const distance = Array.from({ length: n }, () => Array(n).fill(Infinity));
const visited = Array.from({ length: n }, () => Array(n).fill(false));

const heap = new MinHeap();
distance[0][0] = 0;
heap.push([0, 0, 0]); 

while (heap.size() > 0) {
    const [cost, i, j] = heap.pop();

    if (visited[i][j]) continue;
    visited[i][j] = true;

    if (i === n - 1 && j === n - 1) break;

    for (let k = 0; k < 4; k++) {
        const ni = i + dx[k];
        const nj = j + dy[k];

        if (ni >= 0 && ni < n && nj >= 0 && nj < n && !visited[ni][nj]) {
            const newCost = cost + grid[ni][nj];
            if (newCost < distance[ni][nj]) {
                distance[ni][nj] = newCost;
                heap.push([newCost, ni, nj]);
            }
        }
    }
}

console.log(distance[n - 1][n - 1]);