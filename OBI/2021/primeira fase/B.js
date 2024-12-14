let quantity = prompt('quantidade de números falados pelo chefe');
let numbers = [];

for(let i = 0; i < quantity; i++){
    let number = Number(prompt('número'));
    if(number > 0){
        numbers.push(number);
    } else {
        numbers.pop();
    }
}

function sum(){
    let total = 0;
    numbers.forEach((n) => {
        total += n;
    });
    return total;
};

console.log(sum());