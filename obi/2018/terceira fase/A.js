const size = parseInt(prompt());

const sequence = prompt()
    .split(' ', size)
    .map(e => parseInt(e));


const possibilities = [];

if(sequence.includes(0) || sequence.includes(5)){
    let aux = [...sequence];
    for(let i = 0; i < size; i++){
        if(aux[i] == 0 || aux[i] == 5){
            [aux[i], aux[aux.length - 1]] = [aux[aux.length - 1],aux[i]]
            possibilities.push(parseInt(aux.join('')));
        }
        aux = [...sequence];
    }
};

if(possibilities.length == 0){
    console.log(-1);
} else {
    const max = Math.max(...possibilities);
    const string = String(max);
    const formatted = string
        .split('')
        .join(' ');
    console.log(formatted);
}