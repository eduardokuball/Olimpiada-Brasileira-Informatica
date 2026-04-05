export default function findMatchingWord(words) {
    const MAX = 10;

    const prefix = Array.from({ length: MAX + 1 }, () => new Set());
    const suffix = Array.from({ length: MAX + 1 }, () => new Set());

    for (const word of words) {

        for (let k = MAX; k > 0; k--) {
            const pre = word.substring(0, k);

            if (suffix[k].has(pre)) {
                if (k === MAX) {
                    return word;
                } else {
                    const suf = word.substring(k, MAX);
                    if (prefix[MAX - k].has(suf)) {
                        return word;
                    }
                }
            }
        }

        for (let k = MAX; k >= 0; k--) {
            if (k < MAX && k > 0) {
                const pre = word.substring(0, k);
                prefix[k].add(pre);
            }
            if (k < MAX) {
                const suf = word.substring(k, MAX);
                suffix[MAX - k].add(suf);
            }
        }
    }

    return "ok";
}