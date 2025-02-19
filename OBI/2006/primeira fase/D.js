function game(cards, quantity) {
    let buying = [...cards]; 
    let currentCard = 1; 
    let rounds = 0;

    while (true) {
        rounds++; 
        let newBuying = []; 

        for (let i = 0; i < buying.length; i++) {
            if (buying[i] === currentCard) {
                currentCard++; 
                if (currentCard > quantity) return rounds; 
            } else {
                newBuying.push(buying[i]);
            }
        }
        buying = newBuying; 
    }
}

const quantity = parseInt(prompt());
const cards = prompt()
    .split(' ',quantity)
    .map(e => parseInt(e));

console.log(game(cards, quantity));
