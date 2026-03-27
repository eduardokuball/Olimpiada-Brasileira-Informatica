export default function game(cards, quantity) {
    let buying = [...cards];
    let currentCard = 1;
    let rounds = 0;

    while (true) {
        rounds++;
        const newBuying = [];

        for (let i = 0; i < buying.length; i++) {
            if (buying[i] === currentCard) {
                currentCard++;

                if (currentCard > quantity) {
                    return rounds;
                }
            } else {
                newBuying.push(buying[i]);
            }
        }

        buying = newBuying;
    }
}