export default function areAnagrams(wordA, wordB) {

    const compareObjects = (obj1, obj2) =>
        JSON.stringify(obj1) === JSON.stringify(obj2);

    function getCharMap(word = "") {
        const charMap = {};
        const chars = word.split('').sort();

        for (const char of chars) {
            if (!charMap[char]) {
                charMap[char] = 1;
                continue;
            }
            charMap[char]++;
        }

        return charMap;
    }

    function permuteCharsA(wordA = "", wordB = "") {
        const charsA = wordA.split('');
        const charsB = wordB.split('');

        for (let i in charsA) {
            const aChar = charsA[i];

            if (!charsB.includes(aChar)) {
                charsA[i] = '*';
                continue;
            }

            for (let j in charsB) {
                const bChar = charsB[j];

                if (aChar === bChar) {
                    charsB[j] = bChar.toUpperCase();
                    break;
                }
            }
        }

        return charsA.join('');
    }

    const permutedWordA = permuteCharsA(wordA, wordB);
    const charMapA = getCharMap(permutedWordA);
    const charMapB = getCharMap(wordB);

    return compareObjects(charMapA, charMapB) ? 'S' : 'N';
}