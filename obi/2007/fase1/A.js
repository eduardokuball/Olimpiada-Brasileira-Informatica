const quantity = prompt();
const divisions = prompt()
    .split(' ')
    .map(e => parseInt(e));

function pushStock() {
    let stock = 0;
    divisions.forEach((bars) => {
        stock += bars - 1;
    });
    return stock;
}

const stock = pushStock();

console.log(stock);