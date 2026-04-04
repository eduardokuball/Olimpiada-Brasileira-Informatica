export default function calculateMaxPaths(n, edgeList) {
    const edges = Array.from({ length: n + 1 }, () => []);
    const memo = Array.from({ length: n + 1 }, () => []);

    for (const [a, b] of edgeList) {
        edges[a].push(b);
        edges[b].push(a);
        memo[a].push(0);
        memo[b].push(0);
    }

    for (let i = 1; i <= n; i++) {
        edges[i].sort((a, b) => a - b);
    }

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
        if (a === memo[p].length) {
            return 0;
        }

        if (memo[p][a] !== 0) {
            return memo[p][a];
        }

        const nextNode = edges[p][a];
        const nextA = calc(nextNode, p);

        const take = dfs(nextNode, nextA) + 1;
        const skip = dfs(p, a + 1);

        const res = Math.max(take, skip);
        memo[p][a] = res;

        return res;
    }

    const result = [];

    for (let i = 1; i <= n; i++) {
        result.push(1 + dfs(i, 0));
    }

    return result;
}