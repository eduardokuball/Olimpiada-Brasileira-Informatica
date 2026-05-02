// Main Function
export default function nametags(nametags, nametagSize, numbers) {
    const kMins = [];
    const marked = new Set();
    
    const OFFSET = nametagSize - 1;
    const sum = arr => arr.reduce((acc, e) => acc + e, 0);

    for (let i = 0; i < nametags; i++) {
        let min = Infinity;
        let idx = null;
    
        for (let i = 0; i < numbers.length - OFFSET; i++) {
            if (marked.has(i)) continue;

            const win = numbers.slice(i, i + nametagSize);
            const wsum = sum(win);
            if (wsum < min) {
                min = wsum;
                idx = i;
            }
        }

        kMins.push(min);
        const [l, r] = [idx - OFFSET, idx + OFFSET];
        for (let i = l; i <= r; i++) marked.add(i);
    }

    return sum(numbers) - sum(kMins);
}
