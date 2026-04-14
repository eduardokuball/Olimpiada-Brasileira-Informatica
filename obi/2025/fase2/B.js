const parity = x => x % 2;
function neighbors(matrix, i, j) {
    return [
        matrix?.[i-1]?.[j],
        matrix?.[i]?.[j+1],
        matrix?.[i+1]?.[j],
        matrix?.[i]?.[j-1]
    ].filter(Boolean);
}

// Main Function
export default function oddNumberObsession(tray) {
    const clone = [...tray.map(r => [...r])];
    let drops = 0;

    for (let i = 0; i < tray.length; i++) {
        for (let j = 0; j < tray[0].length; j++) {
            const adj = neighbors(clone, i, j);
            const drop = adj.every(x => parity(x) === parity(clone[i][j]));
            if (!drop) continue;
            clone[i][j]++;
            drops++;
        }
    }

    return [drops, clone];
}
