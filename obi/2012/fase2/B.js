export default function findHousesWithSum(numbersOfHomes = [], targetSum) {
    const seen = new Set();

    for (const num of numbersOfHomes) {
        const complement = targetSum - num;

        if (seen.has(complement)) {
            const result = [complement, num];
            return result.sort((a, b) => a - b);
        }

        seen.add(num);
    }
}