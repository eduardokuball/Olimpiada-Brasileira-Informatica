export default function canArrangeBoxes(weights) {
    const boxWeights = [...weights].sort((a, b) => a - b);

    boxWeights.unshift(0);

    for (let i = 0; i < weights.length; i++) {
        if (boxWeights[i + 1] - boxWeights[i] > 8) {
            return 'N';
        }
    }

    return 'S';
}