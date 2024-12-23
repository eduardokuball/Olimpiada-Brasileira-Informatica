let compareObjects = (obj1, obj2) => JSON.stringify(obj1) === JSON.stringify(obj2);

function getCharMap(word="") {
    let charMap = {};

    let chars = word.split('').toSorted();

    for (let char of chars) {
        if (!charMap[char]) {
            charMap[char] = 1;
            continue;
        }

        charMap[char]++;
    }

    return charMap;
}

function permuteCharsA(wordA="", wordB="") {
    let charsA = wordA.split('');
    let charsB = wordB.split('');

    for (let i in charsA) {
        let aChar = charsA[i];
        
        if (!charsB.includes(aChar)) {
            charsA[i] = '*';
            continue;
        }

        for (let j in charsB) {
            let bChar = charsB[j];

            if (aChar === bChar) {
                charsB[j] = bChar.toUpperCase();
                break;
            }
        }
    }

    return charsA.join('');
}

function isAnagram(wordA="", wordB="") {
    let permutedWordA = permuteCharsA(wordA, wordB);

    let charMapA = getCharMap(permutedWordA);
    let charMapB = getCharMap(wordB);

    return compareObjects(charMapA, charMapB);
}

let wordOne = prompt('primeira palavra');
let wordTwo = prompt('segunda palavra');
console.log(isAnagram(wordOne, wordTwo) ? 'S' : 'N');
