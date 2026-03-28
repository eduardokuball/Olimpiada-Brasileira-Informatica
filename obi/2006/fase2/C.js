function getSubsequences(string) {
    const max = parseInt('1'.repeat(string.length), 2);
    const subs = new Set();

    for (let i = 1; i <= max; i++) {
        const binary = i.toString(2).padStart(string.length, '0');

        const subsequence = string
            .split('')
            .filter((_, idx) => Number(binary[idx]))
            .join('');

        subs.add(subsequence);
    }

    return [...subs].sort((a, b) => a.length - b.length);
}

function isSubsequence(sub, string) {
    let i = 0, j = 0;

    while (i < sub.length && j < string.length) {
        if (sub[i] === string[j]) i++;
        j++;
    }

    return i === sub.length;
}

export default function minMissingSubsequenceLength(s1, s2) {
    const subs = getSubsequences(s1);

    for (const s of subs) {
        if (!isSubsequence(s, s2)) {
            return s.length;
        }
    }

    return s1.length;
}