import Knight from '../../../utils/Knight.js';

const holes = [
    { x: 1, y: 3 },
    { x: 2, y: 3 },
    { x: 2, y: 5 },
    { x: 5, y: 4 }
];

export default function getStepsUntilFall(moves = []) {
    const boardSize = 8;
    const knight = new Knight(boardSize, 4, 3);

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