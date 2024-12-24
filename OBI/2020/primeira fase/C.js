const people = parseInt(prompt('quantidade de premiados'));
const shirtSizes = prompt('tamanhos escolhidos')
    .split(' ', people)
    .map(e => parseInt(e));

const smallShirtsQuantity = parseInt(prompt('camisas p produzidas'));
const mediumShirtsQuantity = parseInt(prompt('camisas m produzidas'));

let smallShirts = 0;
let mediumShirts = 0;

shirtSizes.forEach(size => {
    if (size === 1) smallShirts++;
    if (size === 2) mediumShirts++;
});

const shirtsForEveryone =
    smallShirts >= smallShirtsQuantity &&
    mediumShirts >= mediumShirtsQuantity;

console.log(shirtsForEveryone ? 'S' : 'N');