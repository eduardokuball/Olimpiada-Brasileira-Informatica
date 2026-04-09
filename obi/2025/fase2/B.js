class Cookie {
    /**
     * @param {number} i 
     * @param {number} j 
     * @param {number[][]} tray 
     */
    constructor(i, j, tray) {
        this.i = i;
        this.j = j;
        this.tray = tray;
        this.id = `${i}:${j}`;
    }

    get value() {
        return this.tray[this.i][this.j];
    }

    drop() {
        this.tray[this.i][this.j]++;
    }

    nextcookies() {
        const right = new Cookie(this.i, this.j+1, this.tray);
        const down = new Cookie(this.i+1, this.j, this.tray);

        return [
            ...(right.value ? [right] : []),
            ...(down.value ? [down] : [])
        ];
    }

    /**
     * @returns {Cookie}
     */
    clone() {
        const trayClone = [...this.tray.map(e => [...e])];
        return new Cookie(this.i, this.j, trayClone);
    }
}

/**
 * @param {number[][]} tray 
 * @returns {Set<[Cookie, Cookie]>}
 */
function getWrongPairs(tray) {
    const pairs = new Set();
    for (let i = 0; i < tray.length-1; i++) {
        tray[i].forEach((_,j) => {
            const cookie = new Cookie(i, j, tray);
            cookie.nextcookies().forEach(ng => {
                if ((cookie.value + ng.value) % 2 === 1) return;
                pairs.add([cookie, ng]);
            });
        });
    }
    return pairs;
}

/** Main Function
 * @param {number[][]} tray 
 * @returns {[number, number[][]]}
 */
export default function oddNumberObsession(tray) {
    const clone = [...tray.map(e => [...e])]; 
    let totalDrops = 0;
    let pairs = getWrongPairs(clone);

    while (pairs.size > 0) {
        const counter = new Map();

        for (const [c1, c2] of pairs) {
            counter.set(c1.id, (counter.get(c1.id) || 0) + 1);
            counter.set(c2.id, (counter.get(c2.id) || 0) + 1);
        }

        let maxCount = 0;
        for (const count of counter.values())
            if (count > maxCount) maxCount = count;

        let cookieId = null;
        for (const [id, count] of counter) {
            if (count !== maxCount) continue;
            cookieId = id;
            break;
        }

        const [i,j] = cookieId.split(':').map(Number);
        const cookie = new Cookie(i, j, clone);
        cookie.drop();
        totalDrops++;
        pairs = getWrongPairs(clone);
    }

    return [totalDrops, clone];
}
