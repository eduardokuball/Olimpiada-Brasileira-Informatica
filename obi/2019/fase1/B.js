export default function findEldestSonAge(ageMonic, ageFirstSon, ageSecondSon) {
    const ageThirdSon = ageMonic - (ageFirstSon + ageSecondSon);

    return Math.max(ageThirdSon, ageFirstSon, ageSecondSon);
}