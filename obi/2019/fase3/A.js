function fat(n) {
    const big = BigInt(n);
    if (big < 0n) return 0n;
    if (big < 1n) return 1n;
    let result = 1n;
    for (let i = 2n; i <= big; i++) result *= i;
    return result;
}

// Main Function
export default function randomChess(size, towers) {
    if (towers === 0) return size;
    if (towers === 1) return size * (size - towers);
    const positions = fat(size) / (2n * fat(size - 3));
    return parseInt(positions / 3n);
}
