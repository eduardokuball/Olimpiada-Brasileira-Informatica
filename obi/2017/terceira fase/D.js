const [N, Q] = prompt()
    .split(" ")
    .map((e) => {
        return parseInt(e);
    });
const fenwick = Array(N + 1).fill(0);
const residents = [0, ...prompt()
    .split(" ")
    .map((e) => {
        return parseInt(e);
    })
];

function update(i, delta) {
    while (i <= N) {
        fenwick[i] += delta;
        i += i & -i;
    }
}

function query(i) {
    let sum = 0;
    while (i > 0) {
        sum += fenwick[i];
        i -= i & -i;
    }
    return sum;
}

for (let i = 1; i <= N; i++) {
    update(i, residents[i]);
}

for (let queryCount = 0; queryCount < Q; queryCount++) {
    const input = prompt()
        .split(" ")
        .map((e) => {
            return parseInt(e);
        });
    const type = input[0];

    if (type === 0) {
        const [_, index, newValue] = input;
        const delta = newValue - residents[index];
        residents[index] = newValue;
        update(index, delta);
    } else {
        const [_, index] = input;
        console.log(query(index));
    }
}
