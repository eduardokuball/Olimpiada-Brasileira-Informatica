export default function calculateMaxFloor(N, K) {
    let dp = Array(K + 1).fill(0);
    let moves = 0;

    while (dp[K] < N) {
        moves++;
        for (let k = K; k > 0; k--) {
            dp[k] = dp[k] + dp[k - 1] + 1;
        }
    }

    return moves;
};