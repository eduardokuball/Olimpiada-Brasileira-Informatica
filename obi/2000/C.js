export default function bills(value){
    const bits = [50, 10, 5, 1];
    const bills = [0, 0, 0, 0];
    for (let i = 0; i < bits.length; i++) {
        bills[i] = Math.floor(value / bits[i]);
        value = value % bits[i];
    }
    return bills.join(' ');
}
