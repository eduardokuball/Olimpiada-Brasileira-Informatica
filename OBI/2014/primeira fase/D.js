function equalHeights(pinsHeights, height) {
    return pinsHeights.every(item => item === height);
}

function minimumMoves(pinsHeights, height) {
    let pins = [...pinsHeights];
    let moves = 0;

    for (let i = 0; i < pins.length - 1; i++) {
        while (pins[i] !== height) {
            if (pins[i] < height) {
                pins[i]++;
                pins[i + 1]++;
            } else {
                pins[i]--;
                pins[i + 1]--;
            }
            moves++;
        }
    }
    return moves;
}

const [pins, height] = prompt()
    .split(' ')
    .map(e => parseInt(e));

const pinsHeights = prompt()
    .split(' ', pins)
    .map(e => parseInt(e));


console.log(minimumMoves(pinsHeights,height));
