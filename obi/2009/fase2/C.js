export default function organizeAuditorium(lines, columns, auditorium) {

    const markCol = Array(columns).fill(0);
    const col = Array.from({ length: columns }, (_, i) => (auditorium[0][i] - 1) % columns);

    let nc = 0;
    const mc = [];

    for (let i = 0; i < columns; i++) {
        if (markCol[i]) continue;
        let current = col[i];

        while (current !== i) {
            const switchColumn = [current + 1, col[current] + 1];
            mc.push(switchColumn);
            nc++;
            markCol[current] = 1;
            current = col[current];
        }
    }

    const markLin = Array(lines).fill(0);
    const lin = Array.from({ length: lines }, (_, i) => Math.floor((auditorium[i][0] - 1) / columns));

    let nl = 0;
    const ml = [];

    for (let i = 0; i < lines; i++) {
        if (markLin[i]) continue;
        let current = lin[i];

        while (current !== i) {
            const switchLine = [current + 1, lin[current] + 1];
            ml.push(switchLine);
            nl++;
            markLin[current] = 1;
            current = lin[current];
        }
    }

    const result = [];
    result.push(nc + nl);

    for (let [a, b] of ml) {
        if (a > b) [a, b] = [b, a];
        result.push(`L ${a} ${b}`);
    }

    for (let [a, b] of mc) {
        if (a > b) [a, b] = [b, a];
        result.push(`C ${a} ${b}`);
    }

    return result;
}