const distance = [];
const speed = [];
let dp;

function cost(k, i) {
    if (k === 0) return 0.0;
    if (i === -1) return Number.MAX_VALUE;

    if (dp[k][i] !== -1.0) return dp[k][i];

    return dp[k][i] = Math.min(
        cost(k, i - 1),
        cost(i, i - 1) + ((distance[k] - distance[i]) ** 2) / speed[i]
    );
}

const [nStr, finalDistanceStr] = prompt()
    .split(" ");
const N = parseInt(nStr);
distance[N] = parseFloat(finalDistanceStr);
speed[N] = 0;

for (let i = 0; i < N; i++) {
    const [dStr, sStr] = prompt().split(" ");
    distance[i] = parseFloat(dStr);
    speed[i] = parseFloat(sStr);
}

dp = Array.from({ length: N + 1 }, () => Array(N + 1).fill(-1.0));

console.log(cost(N, N - 1).toFixed(3));
