export default function processOperations(sequence, operations) {

    function GCD(a, b) {
        while (b !== 0) {
            const temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    function GCDArray(arr) {
        let result = arr[0];
        for (let i = 1; i < arr.length; i++) {
            result = GCD(result, arr[i]);
            if (result === 1) return 1;
        }
        return result;
    }

    const results = [];

    const updateOperation = (index, value) => {
        sequence[index] = value;
    };

    const getCandidatesOf = (startIndex, endIndex) => {
        const subsequence = sequence.slice(startIndex, endIndex);
        let candidates = 0;

        for (let size = 0; size < subsequence.length; size++) {
            for (let i = 0; i + size < subsequence.length; i++) {

                const sub = subsequence.slice(i, i + size + 1);

                const gcd = GCDArray(sub);

                if (gcd > 1) candidates++;
            }
        }

        results.push(candidates);
    };

    for (const [type, p1, p2] of operations) {
        if (type === 1) {
            updateOperation(p1 - 1, p2);
        } else {
            getCandidatesOf(p1 - 1, p2);
        }
    }

    return results;
}