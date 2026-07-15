// Main Function
export default function chips(reais) {
    const BILLS = [10, 5, 2, 1];
    let remainingMoney = reais;
    let counter = 0;

    BILLS.forEach(bill => {
        let chipsQuantity = parseInt(remainingMoney / bill);
        remainingMoney -= bill * chipsQuantity;
        counter += chipsQuantity;
    });

    return counter;
}
