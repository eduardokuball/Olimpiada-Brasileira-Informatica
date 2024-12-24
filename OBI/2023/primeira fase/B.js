const lineStr = prompt();
const typesAndSizes = lineStr
    .split(' ')
    .slice(0, 2)
    .map(e => parseInt(e));

function generateStock(types, sizes) {
    const stock = [];

    for (let i = 1; i <= types; i++) {
        const sizesString = prompt();
        const sizesList = sizesString
            .split(' ')
            .slice(0, sizes)
            .map(e => parseInt(e));

        stock.push(sizesList);
    }

    return stock;
}

function generateOrders(num) {
    const orders = [];

    for (let i = 1; i <= num; i++) {
        const lineStr = prompt();
        const typeAndSize = lineStr
            .split(' ')
            .slice(0, 2)
            .map(e => parseInt(e));

        const order = {
            type: typeAndSize[0],
            size: typeAndSize[1]
        };

        orders.push(order);
    }

    return orders;
}

function makePurchaseOfOrders(stock, orders) {
    let successfulPurchases = 0;

    for (const order of orders) {
        const { type, size } = order;

        if (!(stock?.[type-1]?.[size-1])) continue;
        if (stock[type-1][size-1] <= 0) continue;

        stock[type-1][size-1]--;
        successfulPurchases++;
    }

    return successfulPurchases;
}

const stock = generateStock(...typesAndSizes);

const ordersNum = parseInt(prompt());
const orders = generateOrders(ordersNum);

const successfulPurchases = makePurchaseOfOrders(stock, orders);
console.log(successfulPurchases);