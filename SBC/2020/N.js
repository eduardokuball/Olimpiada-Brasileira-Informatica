function getInitialBalance() {
    const value = prompt().slice(1);
    return parseFloat(value);
}

function getDepositValue() {
    const value = prompt().slice(1);
    return parseFloat(value);
}

function updateBalance(balance, deposit) {
    return balance + deposit;
}

function hasDelay(balance) {
    const string = String(balance.toFixed(2));
    return string.slice(-2) !== "00";
}

function countDelays(days) {
    let openingBalance = getInitialBalance();
    let delays = 0;

    for (let i = 1; i <= days; i++) {
        const deposit = getDepositValue();
        openingBalance = updateBalance(openingBalance, deposit);

        if (hasDelay(openingBalance)) {
            delays++;
        }
    }

    return delays;
}

const days = Number(prompt());
const delays = countDelays(days);

console.log(delays);
