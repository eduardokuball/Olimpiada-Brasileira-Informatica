function findIntersection(regions) {
    let x1 = Math.max(...regions[0]);
    let y1 = Math.min(...regions[1]);
    let x2 = Math.min(...regions[2]);
    let y2 = Math.max(...regions[3]); 

    if (x1 < x2 && y1 > y2) {
        return [ x1, y1, x2, y2 ].join(' ');
    } else {
        return "nenhum";
    }
};

function getRegions(quantity){
    let x1s = [];
    let y1s = [];
    let x2s = [];
    let y2s = [];
    for (let i = 0; i < quantity; i++) {
        const [x1, y1, x2, y2] = prompt()
           .split(' ')
           .map(e => parseInt(e));
        x1s.push(x1);
        y1s.push(y1);
        x2s.push(x2);
        y2s.push(y2);
    }
    return [x1s,y1s,x2s,y2s];
};

const quantity = parseInt(prompt());

const regions = getRegions(quantity);

const intersection = findIntersection(regions);

console.log(intersection);
