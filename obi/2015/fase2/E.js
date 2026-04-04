export default function processQueueOperations(fila = [], operations = []) {

    const result = [];

    for (const [t, i, x] of operations) {

        if (t === 0) {
            fila.splice(i, 0, x);
        } else {
            let c = 0;

            for (let k = i - 2; k >= 0; k--) {
                if (fila[k] > fila[i - 1] + x) {
                    c = k + 1;
                    break;
                }
            }

            result.push(c);
        }
    }

    return result;
}