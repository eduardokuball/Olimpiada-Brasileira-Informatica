const guests = prompt();
const firstcome = prompt()
    .split(' ')
    .map(e => parseInt(e));

function draw(firstcome=[]) {
    let sorted = 0;
    firstcome.forEach((i) => {
        if ((firstcome.indexOf(i) + 1) == i) {
            sorted += i;
        }
    });
    return sorted;
}

console.log(draw());