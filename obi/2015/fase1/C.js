export default function calculateGenerationPercentages(n, parents = [], present = []) {

    const descendants = Array.from({ length: n + 1 }, () => []);

    for (let i = 0; i < n; i++) {
        const parent = parents[i];
        descendants[parent].push(i + 1);
    }

    const generation = Array(n + 1).fill(0);

    const queue = [[0, 0]];
    let head = 0;

    while (head < queue.length) {
        const [parent, parentGen] = queue[head++];

        for (const child of descendants[parent]) {
            generation[child] = parentGen + 1;
            queue.push([child, parentGen + 1]);
        }
    }

    const maxGeneration = Math.max(...generation);

    const generationCounts = Array.from(
        { length: maxGeneration + 1 },
        () => [0, 0] // [present, total]
    );

    for (let i = 1; i <= n; i++) {
        generationCounts[generation[i]][1]++;
    }

    for (const p of present) {
        generationCounts[generation[p]][0]++;
    }

    const result = [];

    for (let i = 1; i <= maxGeneration; i++) {
        const presentCount = generationCounts[i][0];
        const totalCount = generationCounts[i][1];

        const percentage = (presentCount / totalCount) * 100;

        result.push(percentage.toFixed(2));
    }

    return result;
}