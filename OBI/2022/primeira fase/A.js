let daily = Number(prompt('digite o valor da diária'));
let increase = Number(prompt('aumento da diária'));
let arrive = Number(prompt('dia da chegada'));

let total = 0;



if(arrive == 1){
    total = daily * 31;
} else if(arrive > 1 && arrive < 16) {
    for(let i = arrive; i < 16; i++){
        let calc = daily + ((i -1) * increase);
        console.log(calc);
        total += calc;
        daily = calc;
    };
    let rest = 31 - arrive;
    total += rest * daily;
} else if(arrive > 15){
    let d = daily + (14 * increase);
    let days = 31 - (arrive - 1);
    total += d * days;
};

console.log(total);





