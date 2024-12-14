let start = Number(prompt('começo da sequência'));
let end = Number(prompt('fim da sequência'));
let search = Number(prompt('número que esta procurando'));
let results = [];

for(let i = start; i <= end; i++){
    let array = i.toString().split('').map(Number);
    let sum = array.reduce((a, b) => a + b, 0);
    if(sum == search){
        results.push(i);
    }  
};

function response(array){
    if(array.length == 0){
        return -1
    }
    return array.at(-1);
};

console.log(response(results));
