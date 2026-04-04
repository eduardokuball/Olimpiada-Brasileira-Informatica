// Main function
export default function sequenceSum(lower, higher, sequence, marks) {
    const elements = sequence.length;

    const prefSum = new Array(elements + 1).fill(0);
    const prefMark = new Array(elements + 1).fill(0);
    for (let i = 1; i <= elements; i++) {
        prefSum[i] = prefSum[i - 1] + sequence[i - 1];
        prefMark[i] = prefMark[i - 1] + marks[i - 1];
    }
    
    const totalMarked = prefMark[elements];
    const INF = 1e18;
    const best = new Array(totalMarked + 1).fill(INF);
    best[0] = 0;
    
    let ans = (lower === 0) ? 0 : -INF;
    
    for (let j = 1; j <= elements; j++) {
        const curMark = prefMark[j];
        const low = Math.max(0, curMark - higher);
        const high = curMark - lower;
        if (high >= low) {
            for (let t = low; t <= high; t++) {
                if (best[t] !== INF) {
                    const cand = prefSum[j] - best[t];
                    if (cand > ans) ans = cand;
                }
            }
        }

        if (prefSum[j] < best[curMark]) best[curMark] = prefSum[j];
    }
    
    return ans;
}
