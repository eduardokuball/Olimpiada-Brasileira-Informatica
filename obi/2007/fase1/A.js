export default function pushStock(divisions) {
    let stock = 0;

    for (const bars of divisions) {
        stock += bars - 1;
    }

    return stock;
};