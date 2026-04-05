export default function countWalls(n) {
    const MOD = 1000000007;

    const wall = new Array(n + 1).fill(0);

    wall[0] = 1;
    if (n >= 1) wall[1] = 1;
    if (n >= 2) wall[2] = 5;

    for (let i = 3; i <= n; i++) {
        wall[i] = (wall[i - 1] + 4 * wall[i - 2] + 2 * wall[i - 3]) % MOD;
    }

    return wall[n];
}