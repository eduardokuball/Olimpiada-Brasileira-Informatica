let f = prompt()
    .split(' ')
    .map((e) => {
        return parseInt(e);
    });
f.sort((a, b) => a - b);

const [f1,f2,f3] = f;

const a1 = (0 + f1) * 100;
const a2 = (f2 - f1 - 200) > 0 ? (f2 - f1 - 200) * 100 : 0;
const a3 = (f3 - f2 - 200) > 0 ? (f3 - f2 - 200) * 100 : 0;
const a4 = (600 - f3 - 200) * 100;

const c = a1 + a2 + a3 + a4;

console.log(c);
