import Knight from "../../../utils/knight.js";

const holes = [
    { x: 1, y: 3 },
    { x: 2, y: 3 },
    { x: 2, y: 5 },
    { x: 5, y: 4 }
];

const quantity = Number(prompt());
const moves = prompt()
    .split(' ', quantity)
    .map(e => parseInt(e));

const boardSize = 8;
const knight = new Knight(boardSize, 4, 3);

function executeMoves(moves) {
    let stepsTaken = 0;

    for (const move of moves) {

        knight.move(move);

        if (holes.some(h => h.x === knight.x && h.y === knight.y)) {
            return stepsTaken + 1;
        }

        stepsTaken++;
    }
    return stepsTaken;
}

console.log(executeMoves(moves));
