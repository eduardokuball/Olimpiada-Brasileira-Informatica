export default function determineWinner(rounds) {
    let dario = 0;
    let xerxes = 0;

    for (const [d, x] of rounds) {
        if (x === (d + 1) % 5 || x === (d + 2) % 5) {
            dario++;
        } else {
            xerxes++;
        }
    }

    return dario > xerxes ? 'dario' : 'xerxes';
}