const [lines, c] = prompt()
    .split(' ')
    .map((e) => {
        return parseInt(e);
    });

const auditorio = [];

for (let i = 0; i < lines; i++) {
    const cadeiras = prompt()
    .split(' ')
    .map((e) => {
        return parseInt(e);
    });
    auditorio.push(cadeiras);
}

const markCol = Array(c).fill(0);
const col = Array.from({ length: c }, (_, i) => (auditorio[0][i] - 1) % c);

let nc = 0;
const mc = [];

for (let i = 0; i < c; i++) {
    if (markCol[i]) continue;
    let atual = col[i];

    while (atual !== i) {
        const trocaColuna = [atual + 1, col[atual] + 1];
        mc.push(trocaColuna);
        nc++;
        markCol[atual] = 1;
        atual = col[atual];
    }
}

const markLin = Array(l).fill(0);
const lin = Array.from({ length: lines }, (_, i) => Math.floor((auditorio[i][0] - 1) / c));

let nl = 0;
const ml = [];

for (let i = 0; i < lines; i++) {
    if (markLin[i]) continue;
    let atual = lin[i];

    while (atual !== i) {
        const trocaLinha = [atual + 1, lin[atual] + 1];
        ml.push(trocaLinha);
        nl++;
        markLin[atual] = 1;
        atual = lin[atual];
    }
}

console.log(nc + nl);
for (const [a, b] of ml) {
    console.log(a, b);
}
for (const [a, b] of mc) {
    console.log(a, b);
}

