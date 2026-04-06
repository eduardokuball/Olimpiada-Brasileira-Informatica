function calculateFirstHalf(daily, increase, arrive) {
    let total = 0;

    for (let i = arrive; i < 16; i++) {
        const currentDaily = daily + ((i - 1) * increase);
        total += currentDaily;
    }

    const lastDaily = daily + (14 * increase);
    const remainingDays = 31 - 15;

    total += remainingDays * lastDaily;

    return total;
}

function calculateSecondHalf(daily, increase, arrive) {
    const promotedDaily = daily + (14 * increase);
    const days = 31 - (arrive - 1);

    return promotedDaily * days;
}

export default function calculateStayTotal(daily, increase, arrive) {
    let total = 0;

    if (arrive === 1) {
        total = daily * 31;
    } else if (arrive > 1 && arrive < 16) {
        total = calculateFirstHalf(daily, increase, arrive);
    } else {
        total = calculateSecondHalf(daily, increase, arrive);
    }

    return total;
}