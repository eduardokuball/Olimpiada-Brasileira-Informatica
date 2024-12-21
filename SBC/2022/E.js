let [width,pieceWidth,emptyCells] = prompt('largura do tabuleiro, largura da peça e quadrados vazios a esquerda')
.split(" ")
.map(Number);

let pieces = [];

for(let i = 0; i < width; i++){
  if(i + 1 != pieceWidth){
    pieces.push(i + 1);
  }
};

pieces = pieces.reverse();

let cellsEnd = emptyCells;
let cellsStart = (pieceWidth - width + emptyCells) * -1;
let cellsRemaining = width - pieceWidth;

pieces.forEach((p) => {
    if(cellsStart - p >= 0){
        if(cellsRemaining - p >= 0){
            cellsStart -= p;
            cellsRemaining -= p;
        }
    } else {
        if(cellsEnd - p >= 0){
            if(cellsRemaining - p >= 0){
                cellsEnd -= p;
                cellsRemaining -= p;
            }
        }
    }
}
);

console.log(cellsRemaining);

