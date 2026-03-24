
function createGame(quantity, favored) {
    const game = [];


    for (let i = 0; i < quantity; i++) {
        game.push({
            buzios: (i + 1 === favored) ? 2 : 1,
            position: i + 1,
        });
    }


    return game;
}


export default function simulateGame(quantity, favored) {
    const game = createGame(quantity, favored);


    let rounds = 0;
    let turns = 1;


    while (game.length > 1) {
        const currentIndex = rounds % game.length;
        const nextIndex = (currentIndex + 1) % game.length;


        const amount = (turns % 2 !== 0) ? 1 : 2;


        game[currentIndex].buzios -= amount;
        game[nextIndex].buzios += amount;


        turns++;
        rounds++;


        if (game[currentIndex].buzios <= 0) {
            game.splice(currentIndex, 1);
            rounds = currentIndex;
        }
    }


    return {
        turns: turns - 1,
        winner: game[0].position
    };
}
