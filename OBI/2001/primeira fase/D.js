function getOccupations(iceCreamMaker) {
    const occupations = [];
    for (let i = 0; i < iceCreamMaker; i++) {
        const [start, end] = prompt()
        .split(" ")
        .map(e => parseInt(e));
        occupations.push({ start, end });
    }
    return occupations;
}

function mergeOccupations(occupations) {
    
    occupations.sort((a, b) => a.start - b.start);

    const merged = [];
    occupations.forEach((o) => {
        if (merged.length === 0) {
            merged.push(o);
        } else {
            const last = merged[merged.length - 1];

            if (last.end >= o.start) {
                last.end = Math.max(last.end, o.end);
            } else {
                merged.push(o);
            }
        }
    });
    return merged;
}

function displayResult(stretches) {
    stretches.forEach((s) => {
        console.log(`${s.start}  ${s.end}`);
    });
}

const [meters, iceCreamMaker] = prompt()
    .split(' ')
    .map(e => parseInt(e));

let occupations = getOccupations(iceCreamMaker);

let stretchesWithIceCreamMan = mergeOccupations(occupations);

displayResult(stretchesWithIceCreamMan);
