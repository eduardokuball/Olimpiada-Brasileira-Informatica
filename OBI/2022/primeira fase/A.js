const daily = Number(prompt('digite o valor da diária'));
const increase = Number(prompt('aumento da diária'));
const arrive = Number(prompt('dia da chegada'));

let total = 0;

if (arrive == 1) {
    total = daily * 31;
} else if (arrive > 1 && arrive < 16) {
    for (let i = arrive; i < 16; i++) {
        const calc = daily + ((i - 1) * increase);
        console.log(calc);
        total += calc;
        daily = calc;
    }
    const rest = 31 - arrive;
    total += rest * daily;
} else if (arrive > 15) {
    const d = daily + (14 * increase);
    const days = 31 - (arrive - 1);
    total += d * days;
}

console.log(total);