export default function draw(guests, firstcome=[]) {
    
    let sorted = 0;
    firstcome.forEach((i) => {
        if ((firstcome.indexOf(i) + 1) == i) {
            sorted += i;
        }
    });
    return sorted;
}

