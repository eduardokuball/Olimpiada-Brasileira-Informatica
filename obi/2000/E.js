export default function findIntersection(regions) {

    regions = regions.map((e) => {
        return e.split(" ").map((e) => {
            return parseInt(e);
        });
    });

    const x1s = regions.map(e => e[0]);
    const y1s = regions.map(e => e[1]);
    const x2s = regions.map(e => e[2]);
    const y2s = regions.map(e => e[3]);

    let x1 = Math.max(...x1s);
    let y1 = Math.min(...y1s);
    let x2 = Math.min(...x2s);
    let y2 = Math.max(...y2s); 

    if (x1 < x2 && y1 > y2) {
        return [ x1, y1, x2, y2 ].join(' ');
    } else {
        return "nenhum";
    }
};



