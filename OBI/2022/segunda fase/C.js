function isPalindrome(word) {
    let letters = word.split('');
    let finalLetterIndex = word.length - 1;

    let wordIsPalindrome = true;

    letters.forEach((letter, i) => {
        let inverseLetterIndex = finalLetterIndex - i;
        let inverseLetter = letters[inverseLetterIndex];

        if (letter !== inverseLetter) wordIsPalindrome = false;
    });

    return wordIsPalindrome;
};

function getPalindromeSubstrings(word='') {
    let wordSize = word.length;

    let palindromeSubstrings = [];

    for (let i = 0; i <= wordSize; i++) {
        for (let j = 0; j <= wordSize; j++) {
            if (i >= j) continue;

            let substring = word.substring(i, j);

            if (!isPalindrome(substring)) continue;
            if (palindromeSubstrings.includes(substring)) continue;

            palindromeSubstrings.push(substring);
        };
    };

    return palindromeSubstrings;
};

let word = prompt();

let palindromeSubstrings = getPalindromeSubstrings(word);

let substringsLength = palindromeSubstrings.map(e => e.length);


let largestSubstringLength = Math.max(...substringsLength); 

console.log(largestSubstringLength)