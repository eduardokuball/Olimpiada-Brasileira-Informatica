const ORDER = [4, 5, 6, 7, 11, 12, 13, 14, 1, 2, 3];

function organizeGame(array) {
    const arr = [...array];

    for (let j = 0; j < 10; j++) {
        for (let i = 0; i < arr.length - 1; i++) {
            if (ORDER.indexOf(arr[i]) > ORDER.indexOf(arr[i + 1])) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
            }
        }
    }

    return arr;
}

function countRoundWinner(adalbertoGame, bernadeteGame) {
    let a = 0;
    let b = 0;

    for (let i = 0; i < 3; i++) {
        if (ORDER.indexOf(adalbertoGame[i]) >= ORDER.indexOf(bernadeteGame[i])) {
            a++;
        } else {
            b++;
        }
    }

    return a > b ? 'A' : 'B';
}

export default function gameResult(roundsData) {

    console.log(roundsData);
    let winnersAdalberto = 0;
    let winnersBernadete = 0;

    for (const cards of roundsData) {
        let adalbertoGame = cards.slice(0, 3);
        let bernadeteGame = cards.slice(3, 6);

        adalbertoGame = organizeGame(adalbertoGame);
        bernadeteGame = organizeGame(bernadeteGame);

        const winner = countRoundWinner(adalbertoGame, bernadeteGame);

        if (winner === 'A') winnersAdalberto++;
        else winnersBernadete++;
    }

    return [winnersAdalberto, winnersBernadete];
}