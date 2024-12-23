// Faz a comparação entre 2 objetos
const compareObjects = (obj1, obj2) => JSON.stringify(obj1) === JSON.stringify(obj2);

// Gera um mapa com a quantidade de cada letra da palavra em órdem
function getCharMap(word="") {
    const charMap = {};

    const chars = word.split('').toSorted();

    for (let char of chars) {
        if (!charMap[char]) {
            charMap[char] = 1;
            continue;
        }

        charMap[char]++;
    }

    return charMap;
}

// Permuta os possíveis caracteres coringa
function permuteCharsA(wordA="", wordB="") {
    const charsA = wordA.split('');
    const charsB = wordB.split('');

    for (let i in charsA) {
        const aChar = charsA[i];
        
        // Faz a permutação das letras que não foram encontradas
        if (!charsB.includes(aChar)) {
            charsA[i] = '*';
            continue;
        }

        // Põe a 1ª letra correspondente em maiúsculo para não confundir a busca
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

// Checa se é um anagrama
function isAnagram(wordA="", wordB="") {
    const permutedWordA = permuteCharsA(wordA, wordB);

    const charMapA = getCharMap(permutedWordA);
    const charMapB = getCharMap(wordB);

    return compareObjects(charMapA, charMapB);
}

const wordOne = prompt();
const wordTwo = prompt();
console.log(isAnagram(wordOne, wordTwo) ? 'S' : 'N');
