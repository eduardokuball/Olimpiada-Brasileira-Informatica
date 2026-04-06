export default function getLongestDistinctSubarrayLength(sequence) {
    let left = 0;
    let maxLength = 0;
    const seen = new Set();

    for (let right = 0; right < sequence.length; right++) {
        while (seen.has(sequence[right])) {
            seen.delete(sequence[left]);
            left++;
        }

        seen.add(sequence[right]);
        const currentLength = right - left + 1;

        if (currentLength > maxLength) {
            maxLength = currentLength;
        }
    }

    return maxLength;
}

