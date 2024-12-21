let [quantity, favored] = prompt('digite a quantidade de jogadores e o jogador favorecido')
.split(' ')
.map(Number);

let obj = [];

for (let i = 0; i < quantity; i++) {
    if (i + 1 === favored) {
        obj.push({
            buzios: 2,
            position: i + 1,
        });
    } else {
        obj.push({
            buzios: 1,
            position: i + 1,
        });
    }
}

function isWinner() {
    let count = 0;
    obj.forEach((item) => {
        if (item.buzios > 0) {
            count++;
        }
    });
    return count === 1;
}

let rounds = 0;
let turns = 1;

while (obj.length > 1) {
    let currentIndex = rounds % obj.length;
    let nextIndex = (currentIndex + 1) % obj.length; 
    if (turns % 2 !== 0) { 
        obj[currentIndex].buzios -= 1;
        obj[nextIndex].buzios += 1;
        turns++;
        rounds++;
    } else {
        obj[currentIndex].buzios -= 2;
        obj[nextIndex].buzios += 2;
        turns++;
        rounds++;
    }


    if (obj[currentIndex].buzios <= 0) {
        obj.splice(currentIndex, 1);
        rounds = currentIndex;
    }
};

let winner = obj.map(item => item.position).join(' ');


console.log(`turnos: ${turns - 1}`);
console.log(`vencedor: ${winner}`);





