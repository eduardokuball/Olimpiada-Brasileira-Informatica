let people = parseInt(prompt('quantidade de premiados'));
let shirtSizes = prompt('tamanhos escolhidos')
    .split(' ', people)
    .map(e => parseInt(e));

let smallShirtsQuantity = parseInt(prompt('camisas p produzidas'));
let mediumShirtsQuantity = parseInt(prompt('camisas m produzidas'));

let smallShirts = 0;
let mediumShirts = 0;

shirtSizes.forEach(size => {
    if (size === 1) smallShirts++;
    if (size === 2) mediumShirts++;
});

let shirtsForEveryone =
    smallShirts >= smallShirtsQuantity &&
    mediumShirts >= mediumShirtsQuantity;

console.log(shirtsForEveryone ? 'S' : 'N');
