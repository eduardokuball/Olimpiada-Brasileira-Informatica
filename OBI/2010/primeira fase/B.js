function initializeField(lines) {
    const field = [];
    for (let i = 0; i < lines; i++) {
        const row = prompt().split("");
        field.push(row);
    }
    return field;
}

function countHits(field, commands) {
    let shipsHit = 0;
    for (let i = 0; i < commands; i++) {
        const [x, y] = prompt()
            .split(' ')
            .map(Number);
        
        if (field[x - 1][y - 1] === '#') {
            shipsHit++;
        }
    }
    return shipsHit;
}

const [lines, columns] = prompt()
    .split(" ")
    .map(e => parseInt(e));

const field = initializeField(lines);

const commands = Number(prompt());

const shipsHit = countHits(field, commands);

console.log(shipsHit);
