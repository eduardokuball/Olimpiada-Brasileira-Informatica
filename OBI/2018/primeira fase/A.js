const width = parseInt(prompt());  
const length = parseInt(prompt());

const type1Tiles = width * length + (width - 1) * (length - 1);
const type2Tiles = (width - 1) * 2 + (length - 1) * 2;

console.log(type1Tiles);
console.log(type2Tiles);
