export default function calculateFinalSum(numbers) {
    const stack = [];

    for (const number of numbers) {
        if (number > 0) {
            stack.push(number);
        } else {
            stack.pop();
        }
    }

    let total = 0;
    for (const n of stack) {
        total += n;
    }

    return total;
}