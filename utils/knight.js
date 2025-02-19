class Knight {
    constructor(size, x, y) {
        this.size = size;

        if (x < 0 || x >= size || y < 0 || y >= size) {
            throw new Error(`Invalid position (${x}, ${y}). It must be between 0 and ${size - 1}.`);
        }

        this.x = x;
        this.y = y;
}
    getMoves() {
        const moves = [
            [this.x + 1, this.y + 2],
            [this.x + 2, this.y + 1],
            [this.x + 2, this.y - 1],
            [this.x + 1, this.y - 2],
            [this.x - 1, this.y - 2],
            [this.x - 2, this.y - 1],
            [this.x - 2, this.y + 1],
            [this.x - 1, this.y + 2]
        ];
        return moves.map(([y, x]) =>
            y >= 0 && y < this.size && x >= 0 && x < this.size ? [y, x] : false
        );
    };

    getIsPossibleMovie(move){
        if (move < 1 || move > 8) {
            throw new Error('Invalid Movement');
        }
        const moves = this.getMoves();
        if(moves[move - 1]) return true;
        return false;
    };

    getPossiblesMovies(){
        const possibleMoves = [];
        const moves = this.getMoves();
        for(let i = 0; i < 8; i++){
            if(moves[i]){
                possibleMoves.push(i + 1);
            }
        };
        return possibleMoves.join(' ');
    };

    move(moveIndex) {
        if (!this.getIsPossibleMovie(moveIndex)) {
            throw new Error('Invalid move');
        }
    
        const [newX, newY] = this.getMoves()[moveIndex - 1];
        this.x = newX;
        this.y = newY;
    }

    getPosition() {
        return { x: this.x, y: this.y };
    }
}

export default Knight;

// const knight = new Knight(8, 0, 0);

// console.log(knight.getMoves());

// console.log(knight.getIsPossibleMovie(3));

// console.log(knight.getPossiblesMovies());

// console.log(knight.getPosition());

// knight.move(2);

// console.log(knight.getPosition());




