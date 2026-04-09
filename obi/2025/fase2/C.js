function round(L, min, max) {
    let box = 0;
    let rounds = 0;

    for (let i = min; i <= max; i++) {
        box += i;
        rounds++;
        if (box >= L) break;
    }

    return rounds;
}

// Main Function
export default function distinctChallenge(rounds) {
    return rounds.map(r => round(...r));
}
