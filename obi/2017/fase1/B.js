export default function calculateMinPalindromePartitions(string) {
    const size = string.length;

    function isPalindrome(str) {
        let left = 0;
        let right = str.length - 1;

        while (left < right) {
            if (str[left] !== str[right]) return false;
            left++;
            right--;
        }

        return true;
    }

    const minPartitions = Array(size + 1).fill(Infinity);
    minPartitions[0] = 0;

    for (let i = 1; i <= size; i++) {
        for (let j = 0; j < i; j++) {
            if (isPalindrome(string.substring(j, i))) {
                minPartitions[i] = Math.min(
                    minPartitions[i],
                    minPartitions[j] + 1
                );
            }
        }
    }

    return minPartitions[size];
}