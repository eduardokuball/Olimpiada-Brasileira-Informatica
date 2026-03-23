const availableMoney = parseFloat(prompt());
const butcherCheck = parseFloat(prompt());
const pharmacyCheck = parseFloat(prompt());
const bakehouseCheck = parseFloat(prompt());

const amountsPayable = [butcherCheck, pharmacyCheck, bakehouseCheck];
amountsPayable.sort((a, b) => a - b);

let amountToPay = 0;
let billsPaid = 0;

for (const value of amountsPayable) {
    if (amountToPay + value > availableMoney) break;

    amountToPay += value;
    billsPaid++;
}

console.log(billsPaid);