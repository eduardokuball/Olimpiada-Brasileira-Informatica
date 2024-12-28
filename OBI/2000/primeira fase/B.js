const guests = prompt("digite o numero de convidados");
const firstcome = prompt('')
.split(' ')
.map(Number);

function draw() {
    let sorted = 0;
    firstcome.forEach((i) => {
        if ((firstcome.indexOf(i) + 1) == i) {
            sorted += i;
        }
    });
    return sorted;
}

console.log(draw());