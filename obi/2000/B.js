export default function draw(guests, firstcome=[]) {

    firstcome = firstcome.split(' ', guests)
    .map(e => parseInt(e));

    
    let sorted = 0;
    firstcome.forEach((i) => {
        if ((firstcome.indexOf(i) + 1) == i) {
            sorted += i;
        }
    });
    return sorted;
}

