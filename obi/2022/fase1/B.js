function sumOfDigits(number) {
    return number
        .toString()
        .split('')
        .map(Number)
        .reduce((a, b) => a + b, 0);
}

export default function findLastNumberWithDigitSumInRange(start, end, targetSum) {
    for (let i = end; i >= start; i--) {
        if (sumOfDigits(i) === targetSum) {
            return i;
        }
    }

    return -1;
}
