const youngestAge = parseInt(prompt('idade irmão mais novo'));
const meAge = parseInt(prompt('idade otávio'));

const ageDifference = Math.abs(meAge - youngestAge);

const oldestAge = meAge + ageDifference;

console.log(oldestAge);