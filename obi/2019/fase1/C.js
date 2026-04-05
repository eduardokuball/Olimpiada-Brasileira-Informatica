export default function countSubarraysWithSum(sequence, target) {
    let prefixSum = 0;
    let count = 0;

    const prefixMap = { 0: 1 };

    for (const value of sequence) {
        prefixSum += value;

        if (prefixMap.hasOwnProperty(prefixSum - target)) {
            count += prefixMap[prefixSum - target];
        }

        prefixMap[prefixSum] = (prefixMap[prefixSum] || 0) + 1;
    }

    return count;
}