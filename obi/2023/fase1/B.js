export default function countSuccessfulOrders(stock, orders) {
    const inventory = stock.map(row => [...row]);

    let successful = 0;

    for (const [type, size] of orders) {
        const t = type - 1;
        const s = size - 1;

        if (inventory[t]?.[s] > 0) {
            inventory[t][s]--;
            successful++;
        }
    }

    return successful;
}

