const [width, pieceWidth, emptyCells] = prompt()
  .split(" ")
  .map(e => parseInt(e));

function generatePieces(width, pieceWidth) {
  return Array.from({ length: width }, (_, i) => i + 1).filter((p) => p !== pieceWidth).reverse();
}

function tryPlacePiece(start, end, remaining, piece) {
  if (start - piece >= 0 && remaining - piece >= 0) {
    return { start: start - piece, end, remaining: remaining - piece };
  } else if (end - piece >= 0 && remaining - piece >= 0) {
    return { start, end: end - piece, remaining: remaining - piece };
  }
  return { start, end, remaining };
}

let pieces = generatePieces(width, pieceWidth);
let cellsEnd = emptyCells;
let cellsStart = (pieceWidth - width + emptyCells) * -1;
let cellsRemaining = width - pieceWidth;

pieces.forEach((p) => {
  const result = tryPlacePiece(cellsStart, cellsEnd, cellsRemaining, p);
  cellsStart = result.start;
  cellsEnd = result.end;
  cellsRemaining = result.remaining;
});

console.log(cellsRemaining);
