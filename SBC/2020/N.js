let days = Number(prompt('digite a quantidade de dias'));
let openingBalance = 0;
let delays = 0;

for(let i = 0; i < days + 1; i++){
    if(i == 0){
        let value = prompt('digite o saldo inicial');
        value = value.slice(1);
        openingBalance += parseFloat(value);
    } else {
        let value = prompt('digite o valor a ser depositado');
        value = value.slice(1);
        openingBalance += parseFloat(value);
        let string = String(openingBalance.toFixed(2));
        if (string.slice(-2) !== "00") {
            delays++;
        }
    }
}

console.log(delays);