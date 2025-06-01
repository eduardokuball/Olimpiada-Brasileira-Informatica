let [possibilities, balloon] = prompt()
    .split(' ')
    .map((e) => {
        return parseInt(e);
    });


    

const pisoLog = Math.floor(Math.log2(possibilities)) + 1;

let r;

if (pisoLog <= balloon) {
    r = pisoLog;
} else {
    r = 0;
    while (balloon > 1) {
        r += 1;
        possibilities = Math.ceil((possibilities - 1) / 2);
        balloon -= 1;
    }
    r += possibilities;
}

console.log(r);

