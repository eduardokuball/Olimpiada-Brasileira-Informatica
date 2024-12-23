const youngestAge = parseInt(prompt());
const meAge = parseInt(prompt());

const ageDifference = Math.abs(meAge - youngestAge);

const oldestAge = meAge + ageDifference;

console.log(oldestAge);
