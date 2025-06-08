const MOD = 1000000007;
const MAXN = 10000;

const N = parseInt(prompt());
const wall = new Array(MAXN + 1).fill(0);

wall[0] = 1;
wall[1] = 1;
wall[2] = 5;

for (let i = 3; i <= N; i++) {
    wall[i] = (wall[i - 1] + 4 * wall[i - 2] + 2 * wall[i - 3]) % MOD;
}

console.log(wall[N]);
