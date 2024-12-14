let [meters, iceCreamMaker] = prompt('Digite o tamanho da praia e o número de sorveteiros').split(' ').map(Number);
let occupations = [];

for (let i = 0; i < iceCreamMaker; i++) {
    let [start, end] = prompt("Digite a metragem do começo e do fim do sorveteiro").split(" ").map(Number);
    occupations.push({ start, end });
}

occupations.sort((a, b) => a.start - b.start);

let stretchesWithIceCreamMan = [];

occupations.forEach((o) => {
    if (stretchesWithIceCreamMan.length === 0) {
        stretchesWithIceCreamMan.push(o);
    } else {
        let last = stretchesWithIceCreamMan[stretchesWithIceCreamMan.length - 1];

        if (last.end >= o.start) {
            last.end = Math.max(last.end, o.end);
        } else {
            stretchesWithIceCreamMan.push(o);
        }
    }
});

stretchesWithIceCreamMan.forEach((s) => {
    console.log(`${s.start}  ${s.end}`)
});
