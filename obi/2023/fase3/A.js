export default function canBalanceWeights(weights) {
    function isBalanced(arr) {
        return (
            arr[0] === arr[1] + arr[2] &&
            arr[1] + arr[2] === arr[3] + arr[4] + arr[5]
        );
    }

    function permute(arr, l, result) {
        if (l === arr.length) {
            result.push([...arr]);
            return;
        }

        for (let i = l; i < arr.length; i++) {
            [arr[l], arr[i]] = [arr[i], arr[l]];
            permute(arr, l + 1, result);
            [arr[l], arr[i]] = [arr[i], arr[l]];
        }
    }

    const permutations = [];
    permute([...weights], 0, permutations);

    for (const p of permutations) {
        if (isBalanced(p)) return 'S';
    }

    return 'N';
}
