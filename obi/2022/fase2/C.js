export default function getLongestPalindromeSubstringLength(word) {
    const n = word.length;
    let maxLength = 0;

    function expandAroundCenter(left, right) {
        while (left >= 0 && right < n && word[left] === word[right]) {
            const length = right - left + 1;
            if (length > maxLength) {
                maxLength = length;
            }
            left--;
            right++;
        }
    }

    for (let i = 0; i < n; i++) {
        expandAroundCenter(i, i);
        expandAroundCenter(i, i + 1);
    }

    return maxLength;
}
