function editDistance(s, ls, t, lt) {
    const ed = Array.from({ length: ls + 1 }, () => Array(lt + 1).fill(0));

    for (let i = 0; i <= ls; i++) {
        ed[i][0] = i;
    }
    for (let j = 0; j <= lt; j++) {
        ed[0][j] = j;
    }

    for (let i = 1; i <= ls; i++) {
        for (let j = 1; j <= lt; j++) {
            ed[i][j] = Math.min(
                1 + ed[i - 1][j],
                1 + ed[i][j - 1],
                ed[i - 1][j - 1] + (s[i - 1] === t[j - 1] ? 0 : 1)
            );
        }
    }
    return ed[ls][lt] < 3;
}

export default function solve(wordsInDic, wordsInAnalisys, dic, words) {
    const result = [];

    for (let i = 0; i < wordsInAnalisys; i++) {
        let r = '';
        for (let j = 0; j < wordsInDic; j++) {
            if (editDistance(words[i], words[i].length, dic[j], dic[j].length)) {
                r += dic[j] + ' ';
            }
        }
        result.push(r.trim());
    }

    console.log(result);
    return result;
}