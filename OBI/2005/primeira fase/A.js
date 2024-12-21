let rounds = prompt('digite o número de rodadas do bafo');
let aldo = 0;
let beto = 0;

for(let i = 0; i < rounds; i++){
    let [n1, n2] = prompt('digite a quantidade de cartas viradas de cada um')
    .split(' ')
    .map(Number);
    aldo += n1;
    beto += n2;
};

if(aldo > beto){
    console.log('Aldo');
} else {
    console.log('Beto');
}