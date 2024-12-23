let youngestAge = parseInt(prompt('idade irmão mais novo'));
let meAge = parseInt(prompt('idade otávio'));

let ageDifference = Math.abs(meAge - youngestAge);

let oldestAge = meAge + ageDifference;

console.log(oldestAge);
