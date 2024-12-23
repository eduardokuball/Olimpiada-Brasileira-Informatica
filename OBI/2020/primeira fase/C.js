const people = parseInt(prompt());
const shirtSizes = prompt()
    .split(' ', people)
    .map(e => parseInt(e));

const smallShirtsQuantity = parseInt(prompt());
const mediumShirtsQuantity = parseInt(prompt());

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
