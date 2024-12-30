function isWinner() {
    let count = 0;
    game.forEach((item) => {
        if (item.buzios > 0) {
            count++;
        }
    });
    return count === 1;
}

function createGame(quantity,favored){
    const obj = [];

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
    return obj;
}

const [quantity, favored] = prompt()
    .split(' ')
    .map(e => parseInt(e));



const game = createGame(quantity,favored);


let rounds = 0;
let turns = 1;

while (game.length > 1) {
    const currentIndex = rounds % game.length;
    const nextIndex = (currentIndex + 1) % game.length; 
    if (turns % 2 !== 0) { 
        game[currentIndex].buzios -= 1;
        game[nextIndex].buzios += 1;
        turns++;
        rounds++;
    } else {
        game[currentIndex].buzios -= 2;
        game[nextIndex].buzios += 2;
        turns++;
        rounds++;
    }

    if (game[currentIndex].buzios <= 0) {
        game.splice(currentIndex, 1);
        rounds = currentIndex;
    }
}

const winner = game.map(item => item.position).join(' ');

console.log(`turnos: ${turns - 1}`);
console.log(`vencedor: ${winner}`);