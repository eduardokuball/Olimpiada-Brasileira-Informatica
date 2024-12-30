function Organizegame(array) {
    for (let j = 0; j < 10; j++) {
        for (let i = 0; i < array.length - 1; i++) {
            if (order.indexOf(array[i]) > order.indexOf(array[i + 1])) {
                [array[i], array[i + 1]] = [array[i + 1], array[i]];
            }
        }
    }
    return array;
}

function countWinners(adalbertoGame, bernadeteGame) {
    let a = 0;
    let b = 0;
    for (let i = 0; i < 3; i++) {
        if (order.indexOf(adalbertoGame[i]) >= order.indexOf(bernadeteGame[i])) {
            a++;
        } else {
            b++;
        }
    }
    if (a > b) {
        winnersAdalberto++;
    } else {
        winnersBernadete++;
    }
}

const rounds = Number(prompt());
const order = [4, 5, 6, 7, 11, 12, 13, 14, 1, 2, 3];

let winnersAdalberto = 0;
let winnersBernadete = 0;

for (let k = 0; k < rounds; k++) {
    const cards = prompt('digite os jogos')
    .split(' ')
    .map(Number);
    let adalbertoGame = cards.slice(0, 3);
    let bernadeteGame = cards.slice(3, 6);
    adalbertoGame = Organizegame(adalbertoGame);
    bernadeteGame = Organizegame(bernadeteGame);
    countWinners(adalbertoGame, bernadeteGame);
}

console.log(`${winnersAdalberto} ${winnersBernadete}`);