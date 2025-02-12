import Palindrome from "../../../utils/palindrome.js";


function minPalindromePartitions(string,size) {
    const minPartitions = Array(size + 1).fill(Infinity);
    minPartitions[0] = 0;
    
    for (let i = 1; i <= size; i++) {
        for (let j = 0; j < i; j++) {
            if (Palindrome.isPalindrome(string.substring(j, i))) {
                minPartitions[i] = Math.min(minPartitions[i], minPartitions[j] + 1);
            }
        }
    }
    
    return minPartitions[size];
}

const size = parseInt(prompt());
const string = prompt();

const minPartitions = minPalindromePartitions(string,size);

console.log(minPartitions);