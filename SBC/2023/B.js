const quantity = Number(prompt('quantidade:')) * 3;
const input = prompt('números do quadro');
const numbers = input
.split(' ')
.map(Number);
numbers.sort((a, b) => b + a);

function plays(numbers) {
    const plays = [];
    for (let i = 0; i < numbers.length; i += 3) {
        plays.push(numbers.slice(i, i + 3));
    }
    return plays;
}

function allequal(numbers) {
    let equal = true;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > numbers[i + 1] || numbers[i] < numbers[i + 1]) {
            equal = false;
            break;
        }
    }
    return equal;
}

const carlinhosnumbers = [];
const equalizernumbers = [];
const deleteds = [];

function distribution() {
    const playsGame = plays(numbers);
    playsGame.forEach((e) => {
        carlinhosnumbers.push(e[0]);
        equalizernumbers.push(e[1]);
        deleteds.push(e[2]);
    });
}

function response() {
    if (allequal(numbers)) {
        return "N";
    } else {
        distribution();
        const sumcarlos = carlinhosnumbers.reduce((soma, numero) => soma + numero, 0);
        const sumequalizer = equalizernumbers.reduce((soma, numero) => soma + numero, 0);
        if (sumcarlos == sumequalizer) {
            return "N";
        } else {
            return "Y";
        }
    }
}

console.log(response());