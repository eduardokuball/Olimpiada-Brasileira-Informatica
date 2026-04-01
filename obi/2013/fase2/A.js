export default function calculateTotalCost(positions = []) {
    const f = [...positions].sort((a, b) => a - b);

    const [f1, f2, f3] = f;

    const a1 = f1 * 100;
    const a2 = Math.max(0, f2 - f1 - 200) * 100;
    const a3 = Math.max(0, f3 - f2 - 200) * 100;
    const a4 = Math.max(0, 600 - f3 - 200) * 100;

    return a1 + a2 + a3 + a4;
}