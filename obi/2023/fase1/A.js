export default function countBillsPaid(maxMoney, bills) {
    const sortedBills = [...bills].sort((a, b) => a - b);

    let totalSpent = 0;
    let paidCount = 0;

    for (const bill of sortedBills) {
        if (totalSpent + bill > maxMoney) break;

        totalSpent += bill;
        paidCount++;
    }

    return paidCount;
}

