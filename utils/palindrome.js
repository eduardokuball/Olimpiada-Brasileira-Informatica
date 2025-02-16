class Palindrome {
    static isPalindrome(str) {
        // Verifica se a entrada é uma string.
        if (typeof str !== 'string') {
            throw new Error('Input must be a string.');
        }
        
        // Verifica se a string está vazia.
        if (str.length === 0) {
            return false;
        }

        // Inverte a string e compara com a original.
        const reversed = [...str]
            .reverse()
            .join('');
        return str === reversed;
    }
}

export default Palindrome;


//console.log(Palindrome.isPalindrome('racecar')); // true
//console.log(Palindrome.isPalindrome('hello')); // false
//console.log(Palindrome.isPalindrome('madam')); // true
//console.log(Palindrome.isPalindrome('12321')); // true

