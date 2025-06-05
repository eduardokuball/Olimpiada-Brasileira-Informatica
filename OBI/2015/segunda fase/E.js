const n = parseInt(prompt());
const fila = prompt()
    .split(' ')
    .map((e) => {
        return parseInt(e);
    });

const q = parseInt(prompt());

for (let j = 0; j < q; j++) {
    const [t, i, x] = prompt()
    .split(' ')
    .map((e) => {
        return parseInt(e);
    });

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
        console.log(c);
    }
}

