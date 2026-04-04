export default function calculateMaxEvolutions(pokemonCosts, availableCandies) {
    const sortedCosts = [...pokemonCosts].sort((a, b) => a - b);

    let remainingCandies = availableCandies;
    let evolutions = 0;

    for (let i = 0; i < sortedCosts.length; i++) {
        if (remainingCandies >= sortedCosts[i]) {
            remainingCandies -= sortedCosts[i];
            evolutions++;
        }
    }

    return evolutions;
}