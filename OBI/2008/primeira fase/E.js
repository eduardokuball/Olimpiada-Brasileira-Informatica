function pontuacao(a, forca, n) {
    let start = 0;
    let finish = n;

    while (finish - start > 1) {
        const med = Math.floor((finish + start) / 2);
        if (a[med] <= forca) {
            start = med;
        } else {
            finish = med;
        }
    }
    return finish - 1;
}

const [n, m] = prompt()
    .split(' ')
    .map(Number);

const a = [0, ...prompt()
    .split(' ')
    .map(Number)];

const f = prompt()
    .split(' ')
    .map(Number);

const ogros = prompt()
    .split(' ')
    .map(Number);

let resultado = '';

for (let o of ogros) {
    resultado += f[pontuacao(a, o, n)] + ' ';
}

console.log(resultado.trim());
