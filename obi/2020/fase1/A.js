export default function calculateOldestAge(youngestAge, myAge) {
    const ageDifference = Math.abs(myAge - youngestAge);
    return myAge + ageDifference;
}