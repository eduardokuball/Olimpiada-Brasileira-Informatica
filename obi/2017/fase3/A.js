export default function calculateMinimumCost(distances, speeds, finalDistance) {
    const N = distances.length;

    const distance = [...distances, finalDistance];
    const speed = [...speeds, 0];

    const dp = Array.from({ length: N + 1 }, () =>
        Array(N + 1).fill(-1.0)
    );

    function cost(k, i) {
        if (k === 0) return 0.0;
        if (i === -1) return Number.MAX_VALUE;

        if (dp[k][i] !== -1.0) return dp[k][i];

        return dp[k][i] = Math.min(
            cost(k, i - 1),
            cost(i, i - 1) +
                ((distance[k] - distance[i]) ** 2) / speed[i]
        );
    }

    return Number(cost(N, N - 1).toFixed(3));
}