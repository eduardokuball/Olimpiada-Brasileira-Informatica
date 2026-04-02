export default function getMaxCandies(game = []) {

    const dimension = game.length;

    function order(board) {
        const newGame = board.map(row => [...row]);

        for (let i = 0; i < newGame.length; i++) {
            if (i % 2 !== 0) {
                newGame[i].reverse();
            }
        }

        return newGame;
    }

    function maxCandies(board) {
        let candies = 0;
        const possibilities = [];

        for (let i = 0; i < dimension; i++) {
            for (let j = 0; j < dimension; j++) {

                if (board[i][j] === "o") {
                    candies++;
                }

                if (board[i][j] === "A") {
                    possibilities.push(candies);
                    candies = 0;
                }
            }
        }

        possibilities.push(candies);

        return Math.max(...possibilities);
    }

    const newGame = order(game);

    return maxCandies(newGame);
}