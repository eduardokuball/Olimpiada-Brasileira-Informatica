export default function guessNumber(A, B, P) {
    const dAP = Math.abs(A - P);
    const dBP = Math.abs(B - P);
    if (dAP === dBP) return 'E';
    if (dAP > dBP) return 'B';
    if (dBP > dAP) return 'A';
}
