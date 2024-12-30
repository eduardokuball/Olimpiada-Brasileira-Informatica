function sum() {
    let total = 0;
    numbers.forEach((n) => {
        total += n;
    });
    return total;
}

const quantity = prompt();
const numbers = [];

for (let i = 0; i < quantity; i++) {
    const number = Number(prompt());
    if (number > 0) {
        numbers.push(number);
    } else {
        numbers.pop();
    }
}

console.log(sum());