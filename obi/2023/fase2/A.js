export default function getLongestCommonPrefixLength(word1, word2) {
    const minLength = Math.min(word1.length, word2.length);
    let prefixLength = 0;

    for (let i = 0; i < minLength; i++) {
        if (word1[i] === word2[i]) {
            prefixLength++;
        } else {
            break;
        }
    }

    return prefixLength;
}

