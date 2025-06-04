const [n, m] = prompt()
    .split(" ")
    .map((e) => {
        return parseInt(e);
    });
const parents = prompt()
    .split(" ")
    .map((e) => {
        return parseInt(e);
    });
const present = prompt()
    .split(" ")
    .map((e) => {
        return parseInt(e);
    });

const descendants = Array.from({ length: n + 1 }, () => []);
for (let i = 0; i < n; i++) {
    const parent = parents[i];
    descendants[parent].push(i + 1);
}

const generation = Array(n + 1).fill(0);
const queue = [[0, 0]];

while (queue.length > 0) {
    const [parent, parentGen] = queue.shift();
    for (const child of descendants[parent]) {
        generation[child] = parentGen + 1;
        queue.push([child, parentGen + 1]);
    }
}

const maxGeneration = Math.max(...generation);
const generationCounts = Array.from({ length: maxGeneration + 1 }, () => [0, 0]);

for (let i = 1; i <= n; i++) {
    generationCounts[generation[i]][1] += 1; 
}

for (const p of present) {
    generationCounts[generation[p]][0] += 1; 
}

const result = [];
for (let i = 1; i <= maxGeneration; i++) {
    const presentCount = generationCounts[i][0];
    const totalCount = generationCounts[i][1];
    const percentage = (presentCount / totalCount) * 100;
    result.push(percentage.toFixed(2));
}

console.log(result.join(" "));
