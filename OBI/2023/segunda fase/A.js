let lenghtfirst = prompt('tamanho da primeira palavra');
let firstword = prompt('digite a primeira palavra').toLowerCase();
let lenghtsecond = prompt('tamanho da segunda palavra').toLowerCase();
let secondword = prompt('digite a segunda palavra');

let repetitions = secondword.length < firstword.length ? secondword.length : firstword.length;



function prefixies(){
    let prefix = 0;
    for(let i = 0; i < repetitions; i++){
        if(firstword[i] === secondword[i]){
            prefix++;
        } else {
            break;
        }
    }
    return prefix;
};

console.log(prefixies());