export default function determineWinners(rounds, player1, player2, plays) {

    function determineWinner(n1, n2) {
        return (n1 + n2) % 2 === 0 ? player1 : player2;
    }

    const winners = [];

    for (let i = 0; i < rounds; i++) {
        const [n1, n2] = plays[i];
        winners.push(determineWinner(n1, n2));
    }

    return winners;
}