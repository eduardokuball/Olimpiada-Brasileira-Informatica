function countShirtSizes(shirtSizes) {
    let smallShirts = 0;
    let mediumShirts = 0;
    
    shirtSizes.forEach(size => {
        if (size === 1) smallShirts++;
        if (size === 2) mediumShirts++;
    });
    
    return [smallShirts, mediumShirts];
}

function canDistributeShirts(smallShirts, mediumShirts, smallShirtsQuantity, mediumShirtsQuantity) {
    return smallShirts >= smallShirtsQuantity && mediumShirts >= mediumShirtsQuantity;
}

const people = parseInt(prompt());
const shirtSizes = prompt()
    .split(' ', people)
    .map(e => parseInt(e));

const smallShirtsQuantity = parseInt(prompt());
const mediumShirtsQuantity = parseInt(prompt());

const [smallShirts, mediumShirts] = countShirtSizes(shirtSizes);

const shirtsForEveryone = canDistributeShirts(smallShirts, mediumShirts, smallShirtsQuantity, mediumShirtsQuantity);

console.log(shirtsForEveryone ? 'S' : 'N');
