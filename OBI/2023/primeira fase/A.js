let availableMoney = parseFloat(prompt());
let butcherCheck = parseFloat(prompt());
let pharmacyCheck = parseFloat(prompt());
let bakehouseCheck = parseFloat(prompt());

let amountsPayable = [butcherCheck, pharmacyCheck, bakehouseCheck];
amountsPayable.sort((a, b) => a - b);

let amountToPay = 0;
let billsPaid = 0;

for (let value of amountsPayable) {
    if (amountToPay + value > availableMoney) break;

    amountToPay += value;
    billsPaid++;
};

console.log(billsPaid);