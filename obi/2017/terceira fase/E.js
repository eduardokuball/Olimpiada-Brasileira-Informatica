const MAX = 10;

const N = parseInt(prompt());
const prefix = Array.from({ length: MAX + 1 }, () => new Set());
const suffix = Array.from({ length: MAX + 1 }, () => new Set());

for (let i = 0; i < N; i++) {
    const word = prompt();

    for (let k = MAX; k > 0; k--) {
        const pre = word.substring(0, k);
        if (suffix[k].has(pre)) {
            if (k === MAX) {
                console.log(word);
                return;
            } else {
                const suf = word.substring(k, MAX);
                if (prefix[MAX - k].has(suf)) {
                    console.log(word);
                    return;
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

console.log("ok");
