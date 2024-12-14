function generateStock(types, sizes) {
    let stock = [];

    for (let i = 1; i <= types; i++) {
        let sizesString = prompt();
        let sizesList = sizesString
            .split(' ')
            .slice(0, sizes)
            .map(e => parseInt(e));

        stock.push(sizesList);
    };

    return stock;
};

function generateOrders(num) {
    let orders = [];

    for (let i = 1; i <= num; i++) {
        let lineStr = prompt();
        let typeAndSize = lineStr
            .split(' ')
            .slice(0, 2)
            .map(e => parseInt(e));

        let order = {
            type: typeAndSize[0],
            size: typeAndSize[1]
        };

        orders.push(order);
    };

    return orders;
};

function makePurchaseOfOrders(stock, orders) {
    let successfulPurchases = 0;

    for (let order of orders) {
        let { type, size } = order;

        if (!(stock?.[type-1]?.[size-1])) continue;
        if (stock[type-1][size-1] <= 0) continue;

        stock[type-1][size-1]--;
        successfulPurchases++;
    };

    return successfulPurchases;
};

let lineStr = prompt();
let typesAndSizes = lineStr
    .split(' ')
    .slice(0, 2)
    .map(e => parseInt(e));

let stock = generateStock(...typesAndSizes);

let ordersNum = parseInt(prompt());
let orders = generateOrders(ordersNum);

let successfulPurchases = makePurchaseOfOrders(stock, orders);
console.log(successfulPurchases);