const word = prompt();

function isPalindrome(word) {
    const letters = word.split('');
    const finalLetterIndex = word.length - 1;

    let wordIsPalindrome = true;

    letters.forEach((letter, i) => {
        const inverseLetterIndex = finalLetterIndex - i;
        const inverseLetter = letters[inverseLetterIndex];

        if (letter !== inverseLetter) wordIsPalindrome = false;
    });

    return wordIsPalindrome;
}

function getPalindromeSubstrings(word='') {
    const wordSize = word.length;

    const palindromeSubstrings = [];

    for (let i = 0; i <= wordSize; i++) {
        for (let j = 0; j <= wordSize; j++) {
            if (i >= j) continue;

            const substring = word.substring(i, j);

            if (!isPalindrome(substring)) continue;
            if (palindromeSubstrings.includes(substring)) continue;

            palindromeSubstrings.push(substring);
        }
    }

    return palindromeSubstrings;
}

const palindromeSubstrings = getPalindromeSubstrings(word);

const substringsLength = palindromeSubstrings.map(e => e.length);

const largestSubstringLength = Math.max(...substringsLength); 

console.log(largestSubstringLength);