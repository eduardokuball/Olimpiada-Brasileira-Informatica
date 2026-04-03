export default function countWaysToPay(target, notes = []) {

    const values = [2, 5, 10, 20, 50, 100];

    const dp = Array(target + 1).fill(0);
    dp[0] = 1;

    for (let i = 5; i >= 0; i--) {
        for (let j = target; j >= 0; j--) {
            let k = 1;

            while (k <= notes[i] && j - k * values[i] >= 0) {
                dp[j] += dp[j - k * values[i]];
                k += 1;
            }
        }
    }

    return dp[target];
}