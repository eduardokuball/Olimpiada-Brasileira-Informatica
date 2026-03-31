export default function buildSquare(dimension, targetSum) {

    const square = [];
    let currentValue = 0;
    let currentSum = 0;

    for (let i = 0; i < dimension; i++) {
        const row = [];

        for (let j = 0; j < dimension; j++) {
            if (i === j) {
                currentSum += currentValue;
            }

            row.push(currentValue);
            currentValue++;
        }

        square.push(row);
    }

    const diff = currentSum - targetSum;

    if (diff !== 0) {
        const rowToModify = diff > 0 ? 0 : dimension - 1;

        for (let i = 0; i < dimension; i++) {
            square[rowToModify][i] -= diff;
        }
    }
    return square;
}