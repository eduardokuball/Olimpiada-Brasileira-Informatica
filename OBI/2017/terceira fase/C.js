const N = parseInt(prompt());
const graph = Array.from({ length: N + 1 }, () => []);

for (let i = 1; i < N; i++) {
    const [A, B] = prompt()
    .split(" ")
    .map((e) => {
        return parseInt(e);
    });
    graph[A].push(B);
    graph[B].push(A);
}

let result = N;

function dfs(node, parent) {
    let weight = 1;
    for (const neighbor of graph[node]) {
        if (neighbor !== parent) {
            weight += dfs(neighbor, node);
        }
    }
    const diff = Math.abs(N - 2 * weight);
    if (diff < result) {
        result = diff;
    }
    return weight;
}

dfs(1, -1);

console.log(result);
