export default function countSubarraysWithSum(numbers, targetSum) {
    let count = 0;
    const n = numbers.length;

    for (let i = 0; i < n; i++) {
        let currentSum = 0;

        for (let j = i; j < n; j++) {
            currentSum += numbers[j];

            if (currentSum === targetSum) {
                count++;
            }
        }
    }

    return count;
}

