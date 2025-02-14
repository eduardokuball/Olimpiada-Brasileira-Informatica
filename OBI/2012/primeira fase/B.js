import Knight from "../../../utils/knight.js";

const holes = [
    { x: 1, y: 3 },
    { x: 2, y: 3 },
    { x: 2, y: 5 },
    { x: 5, y: 4 }
];

let currentCoordenates = { x: 4, y: 3 };
const squaresCovered = [];

const quantity = Number(prompt());
const moves = prompt()
    .split(' ', quantity)
    .map(e => parseInt(e));

const boardSize = 8; 
const knight = new Knight(boardSize);

function executeMoves(moves) {
    let count = 0;
    
    for (const move of moves) {
        const possibleMoves = knight.getMoves([currentCoordenates.x, currentCoordenates.y]);
        
        if (move - 1 < possibleMoves.length) {
            const [x, y] = possibleMoves[move - 1];

            squaresCovered.push({ x, y });
            currentCoordenates = { x, y };

            if (holes.some(h => h.x === x && h.y === y)) {
                return count + 1;
            }
        }

        count++;
    }
    return count;
}

console.log(executeMoves(moves));
