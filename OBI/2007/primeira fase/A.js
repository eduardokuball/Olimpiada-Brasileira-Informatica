const quantity = prompt('digite o número de divisões');
const divisions = prompt('digite as divisões')
.split(' ')
.map(Number);
let stock = 0;

function pushStock() {
    divisions.forEach((bars) => {
        stock += bars - 1;
    });
    return stock;
}

console.log(pushStock());