import Permutations from '../../../utils/Permutations.js';

export default function getMinimumDistance(buildingsArr = [], sale) {
    const size = buildingsArr.length - sale;

    let combinations = Permutations.fixedSizeWithoutRepetition(buildingsArr, size);

    combinations = combinations.map(c => c.sort((a, b) => a - b));

    const distances = combinations.map(
        c => Math.abs(c[0] - c[c.length - 1])
    );

    return Math.min(...distances);
}