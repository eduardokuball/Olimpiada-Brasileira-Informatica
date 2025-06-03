const [n, m] = prompt()
    .split(' ')
    .map((e) => {
        return parseInt(e);
    });

let families = Array.from({ length: n + 1 }, (_, i) => i);
let children = Array.from({ length: n + 1 }, () => []);

for (let i = 0; i < m; i++) {
    let [a, b] = prompt()
        .split(' ')
        .map((e) => {
            return parseInt(e);
        });

    families[a] = families[b];

    children[b].push(a);
    children[b].push(...children[a]);

    for (let child of children[a]) {
        families[child] = families[b];
    }
}

let differentFamilies = new Set(families.slice(1));
let result = differentFamilies.size;

console.log(result);