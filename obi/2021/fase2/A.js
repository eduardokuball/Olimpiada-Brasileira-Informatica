export default function findMinMaxWithDigitSum(targetSum, start, end) {

    function digitSum(num) {
        return String(num)
            .split('')
            .reduce((sum, d) => sum + Number(d), 0);
    }

    const numbers = [];

    for (let i = start; i <= end; i++) {
        if (digitSum(i) === targetSum) {
            numbers.push(i);
        }
    }

    const min = Math.min(...numbers);
    const max = Math.max(...numbers);

    return [min, max];
}