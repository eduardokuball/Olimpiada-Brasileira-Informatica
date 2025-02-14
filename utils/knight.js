class Knight {
    constructor(size) {
        this.board = new Array(size).fill(0).map(() => new Array(size).fill(0))
        this.size = size
} 
    getMoves([i, j]) {
        const moves = [
            [i + 1, j + 2],
            [i + 2, j + 1],
            [i + 2, j - 1],
            [i + 1, j - 2],
            [i - 1, j - 2],
            [i - 2, j - 1],
            [i - 2, j + 1],
            [i - 1, j + 2]
        ];
        //quando movimento "sai" do tabuleiro, colocasse as coordenadas em null
        //para que não interfira
        //pois os movimentos estão na ordem
        // por exemplo, o movimento de número 8 e o ultimo
        //logo se retornamos apenas os validos, talvez ele saia do lugar
        return moves.map(([y, x]) =>
            y >= 0 && y < this.size && x >= 0 && x < this.size ? [y, x] : [null, null]
        );
    }
}

export default Knight;

// const knight = new Knight(8);

// console.log("Testando getMoves para a posição (2, 2):", knight.getMoves([0, 0]));


