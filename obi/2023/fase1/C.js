export default function isSubsequence(sequence, subsequence) {
    let j = 0;

    for (let i = 0; i < sequence.length && j < subsequence.length; i++) {
        if (sequence[i] === subsequence[j]) {
            j++;
        }
    }

    return j === subsequence.length;
}

