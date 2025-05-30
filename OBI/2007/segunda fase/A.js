const [sellers, calls] = prompt()
    .split(' ')
    .map(Number);

const w = [];
for (let i = 0; i < sellers; i++) {
    w.push([0, i]);
}

const result = Array(sellers).fill(0);

for (let i = 0; i < calls; i++) {
    const t = Number(prompt());

    w.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
    const item = w[0];
    item[0] += t;
    result[item[1]] += 1;
}

for (let i = 0; i < sellers; i++) {
    console.log((i + 1) + ' ' + result[i]);
}


