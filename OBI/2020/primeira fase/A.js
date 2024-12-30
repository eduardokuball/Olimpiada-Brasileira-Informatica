function calculateOldestAge(youngestAge, meAge) {
    const ageDifference = Math.abs(meAge - youngestAge);
    return meAge + ageDifference;
}

const youngestAge = parseInt(prompt());
const meAge = parseInt(prompt());

const oldestAge = calculateOldestAge(youngestAge, meAge);

console.log(oldestAge);
