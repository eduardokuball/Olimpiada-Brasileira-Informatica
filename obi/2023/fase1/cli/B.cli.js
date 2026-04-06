import { input, output } from '../../../../utils/io.js';
import countSuccessfulOrders from '../B.js';

const [types, sizes] = input().split(' ').map(Number);

const stock = [];

for (let i = 0; i < types; i++) {
    const row = input().split(' ').map(Number);
    stock.push(row);
}

const ordersCount = Number(input());

const orders = [];

for (let i = 0; i < ordersCount; i++) {
    const [type, size] = input().split(' ').map(Number);
    orders.push([type, size]);
}

const result = countSuccessfulOrders(stock, orders);

output(result);