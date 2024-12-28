const days = Number(prompt('digite a quantidade de dias'));
let openingBalance = 0;
let delays = 0;

for (let i = 0; i < days + 1; i++) {
    if (i == 0) {
        const value = prompt('digite o saldo inicial').slice(1);
        openingBalance += parseFloat(value);
    } else {
        const value = prompt('digite o valor a ser depositado').slice(1);
        openingBalance += parseFloat(value);
        const string = String(openingBalance.toFixed(2));
        if (string.slice(-2) !== "00") {
            delays++;
        }
    }
}

console.log(delays);