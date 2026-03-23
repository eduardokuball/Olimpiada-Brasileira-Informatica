function pontuation(a, power, n) {
    let ini = 0;
    let fim = n;

    while (fim - ini > 1) {
        const med = Math.floor((fim + ini) / 2);
        if (a[med] <= power) {
            ini = med;
        } else {
            fim = med;
        }
    }
    return fim - 1;
}

const [strips, competitors] = prompt()
    .split(' ')
    .map((e) => {
        return parseInt(e);
    });

const powers = [0, ...prompt()
    .split(' ')
    .map((e) => {
        return parseInt(e);
    })];

const pontuations = prompt()
    .split(' ')
    .map((e) => {
        return parseInt(e);
    });

const ogros = prompt()
    .split(' ')
    .map((e) => {
        return parseInt(e);
    });

let result = '';

for (let o of ogros) {
    result += pontuations[pontuation(powers, o, strips)] + ' ';
}

console.log(result.trim());
