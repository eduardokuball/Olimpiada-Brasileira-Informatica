export default function canServeAllPeople(shirtSizes, requiredSmall, requiredMedium) {

    function countShirtSizes(shirtSizes) {
        let smallShirts = 0;
        let mediumShirts = 0;

        for (const size of shirtSizes) {
            if (size === 1) smallShirts++;
            if (size === 2) mediumShirts++;
        }

        return [smallShirts, mediumShirts];
    }

    function canDistributeShirts(smallShirts, mediumShirts, smallNeeded, mediumNeeded) {
        return smallShirts >= smallNeeded && mediumShirts >= mediumNeeded;
    }

    const [smallShirts, mediumShirts] = countShirtSizes(shirtSizes);

    return canDistributeShirts(
        smallShirts,
        mediumShirts,
        requiredSmall,
        requiredMedium
    ) ? 'S' : 'N';
}