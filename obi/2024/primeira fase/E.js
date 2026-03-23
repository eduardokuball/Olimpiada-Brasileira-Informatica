import ConwayGameOfLife from "../../../utils/game-of-life.js";

const [size, repetitions] = prompt()
    .split(" ")
    .map(e => parseInt(e));

let initialCells = [];

for (let i = 0; i < size; i++) {
    const line = prompt()
        .split("")
        .map(e => parseInt(e));
    initialCells.push(line);
}


let currentCells = initialCells;


for (let r = 0; r < repetitions; r++) {
    const game = new ConwayGameOfLife(currentCells);
    currentCells = game.nextGeneration();
}

currentCells.forEach(line => {
    console.log(line.join(""));
});
