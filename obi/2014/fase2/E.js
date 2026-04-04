const MAXR = 50;
const MAXN = 100000;

const ROW = 0;
const COL = 1;

export default function processQueries(n, queries = []) {

    const bit = Array.from({ length: MAXN + 2 }, () =>
        Array.from({ length: MAXR + 2 }, () => Array(3).fill(0))
    );

    function add(index, r, pos, value) {
        let i = pos;
        while (i < MAXN) {
            bit[i][r][index] += value;
            i += i & -i;
        }
    }

    function get(index, r, pos) {
        let sum = 0;
        let i = pos;
        while (i > 0) {
            sum += bit[i][r][index];
            i -= i & -i;
        }
        return sum;
    }

    function getBest(lastValue, currentTime, isCol) {
        let sum = 0;
        let bestCount = -1;
        let bestSave = -1;

        const lastR = lastValue[0];
        const lastIdx = lastValue[1];

        for (let r = 0; r <= 50; r++) {
            if (r === lastR) continue;

            const current =
                get(isCol, r, currentTime) -
                get(isCol, r, lastIdx);

            sum += current;

            if (current >= bestCount) {
                bestCount = current;
                bestSave = r;
            }
        }

        if (n - sum > bestCount) {
            bestSave = lastR;
        } else if (n - sum === bestCount) {
            bestSave = Math.max(bestSave, lastR);
        }

        return bestSave;
    }

    const lastRow = Array.from({ length: n + 1 }, () => [0, 0]);
    const lastCol = Array.from({ length: n + 1 }, () => [0, 0]);

    const outputs = [];

    for (let t = 1; t <= queries.length; t++) {
        const line = queries[t - 1];

        if (line.length === 3) {
            const [op, x, r] = line;

            if (op === 1) {
                if (lastRow[x][1] !== 0) {
                    add(COL, lastRow[x][0], lastRow[x][1], -1);
                }
                add(COL, r, t, 1);
                lastRow[x] = [r, t];
            } else {
                if (lastCol[x][1] !== 0) {
                    add(ROW, lastCol[x][0], lastCol[x][1], -1);
                }
                add(ROW, r, t, 1);
                lastCol[x] = [r, t];
            }
        } else {
            const [op, x] = line;

            if (op === 3) {
                outputs.push(getBest(lastRow[x], t, ROW));
            } else {
                outputs.push(getBest(lastCol[x], t, COL));
            }
        }
    }

    return outputs;
}