function calc(p, q) {
    const arr = edges[p];
    let left = 0;
    let right = arr.length;
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] < q + 1) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return left;
}

function dfs(p, a) {
    if (a === visited[p].length) {
        return 0;
    }

    if (visited[p][a]) {
        return visited[p][a];
    }

    const nextNode = edges[p][a];
    const nextA = calc(nextNode, p);

    const take = dfs(nextNode, nextA) + 1;
    const skip = dfs(p, a + 1);

    const res = Math.max(take, skip);
    visited[p][a] = res;
    return res;
}
const [n, m] = prompt()
    .split(' ')
    .map((e) => {
    return parseInt(e);
    });
const edges = Array.from({ length: n + 1 }, () => []);
const visited = Array.from({ length: n + 1 }, () => []);

for (let i = 0; i < m; i++) {
    const [a, b] = prompt()
    .split(' ')
    .map((e) => {
        return parseInt(e);
    });
    edges[a].push(b);
    edges[b].push(a);
    visited[a].push(0);
    visited[b].push(0);
}

for (let i = 1; i <= n; i++) {
    edges[i].sort((a, b) => a - b);
}

let result = "";
for (let i = 1; i <= n; i++) {
    if (i > 1) result += " ";
    result += (1 + dfs(i, 0));
}
console.log(result);
