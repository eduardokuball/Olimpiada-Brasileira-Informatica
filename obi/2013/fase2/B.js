// Main Function
export default function grandmaScarves(n) {
    let a = 6;
    let b = 6;

    for (let i = 2; i <= n; i++) {
        const aux = a;
        a = 3*a + 2*b;
        b = 2*aux + 2*b;
    }

    const MOD = 10**9 + 7; // Reduz resultados longos
    return (a+b) % MOD;
}
