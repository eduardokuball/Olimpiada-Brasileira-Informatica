function determineWinner(player1, player2, n1, n2) {
    return (n1 + n2) % 2 === 0 ? player1 : player2;
}

function playRounds(rounds, player1, player2) {
    const winners = [];
    for (let i = 0; i < rounds; i++) {
        const [n1, n2] = prompt()
            .split(' ')
            .map(Number);
        winners.push(determineWinner(player1, player2, n1, n2));
    }
    return winners;
}

function displayWinners(winners) {
    console.log(winners.join('\n'));
}

const rounds = Number(prompt());
const player1 = prompt();
const player2 = prompt();

const winners = playRounds(rounds, player1, player2);

displayWinners(winners);
