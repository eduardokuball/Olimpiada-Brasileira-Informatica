let quantity = Number(prompt('quantidade:')) * 3;
let input = prompt(' números do quadro');
let numbers = input.split(' ').map(Number);
numbers.sort((a, b) => b + a);

function plays(numbers) {
    let plays = [];
    for (let i = 0; i < numbers.length; i += 3) {
        plays.push(numbers.slice(i, i + 3));
    }
    return plays;
}
function allequal(numbers){
    let equal = true;
    for (let i = 0; i < numbers.length; i++){
        if (numbers[i] > numbers[i+1] || numbers[i] < numbers[i+1]){
            equal = false;
            break;
        }
    }
    return equal;
};

let carlinhosnumbers = [];
let equalizernumbers = [];
let deleteds = [];
function distribution(){
    let playsGame = plays(numbers);
        playsGame.forEach((e) => {
        carlinhosnumbers.push(e[0]);
        equalizernumbers.push(e[1]);
        deleteds.push(e[2]);
    });
};

function response(){
    if(allequal(numbers)){
        return "N";
    }  else {
        distribution();
        let sumcarlos = carlinhosnumbers.reduce((soma, numero) => soma + numero, 0);
        let sumequalizer = equalizernumbers.reduce((soma, numero) => soma + numero, 0);
        if(sumcarlos == sumequalizer){
            return "N";
        } else {
            return "Y";
        }
    }
};

console.log(response());


