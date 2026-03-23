function calculateTotal(daily, increase, arrive) {
    let total = 0;

    if (arrive == 1) {
        total = daily * 31;
    } else if (arrive > 1 && arrive < 16) {
        total = calculateFirstHalf(daily, increase, arrive);
    } else if (arrive > 15) {
        total = calculateSecondHalf(daily, increase, arrive);
    }

    return total;
}

function calculateFirstHalf(daily, increase, arrive) {
    let total = 0;
    for (let i = arrive; i < 16; i++) {
        const calc = daily + ((i - 1) * increase);
        console.log(calc);
        total += calc;
        daily = calc;
    }
    const rest = 31 - arrive;
    total += rest * daily;

    return total;
}

function calculateSecondHalf(daily, increase, arrive) {
    const d = daily + (14 * increase);
    const days = 31 - (arrive - 1);
    return d * days;
}

const daily = Number(prompt());
const increase = Number(prompt());
const arrive = Number(prompt());

const total = calculateTotal(daily, increase, arrive);

console.log(total);
