class ConwayGameOfLife {
    constructor(initialCells = []) {
        this.cells = initialCells;
    }

    // Atualiza o estado atual com uma nova configuração de células
    setCells(cells) {
        this.cells = cells;
    }

    // Retorna o estado atual das células
    getCells() {
        return this.cells;
    }

    // Calcula a próxima geração com base nas regras do Jogo da Vida
    nextGeneration() {
        const nextGen = [];

        for (let i = 0; i < this.cells.length; i++) {
            const row = [];

            for (let j = 0; j < this.cells[i].length; j++) {
                let neighbors = 0;

                for (let x = -1; x <= 1; x++) {
                    for (let y = -1; y <= 1; y++) {
                        if (x === 0 && y === 0) continue;
                        const ni = i + x, nj = j + y;
                        if (
                            ni >= 0 && ni < this.cells.length &&
                            nj >= 0 && nj < this.cells[i].length
                        ) {
                            neighbors += this.cells[ni][nj];
                        }
                    }
                }

                const alive = this.cells[i][j] === 1;
                const cellLives = (alive && (neighbors === 2 || neighbors === 3)) || (!alive && neighbors === 3);

                row.push(cellLives ? 1 : 0);
            }

            nextGen.push(row);
        }

        return nextGen;
    }
}

export default ConwayGameOfLife;

// const game = new ConwayGameOfLife([
//   [0, 1, 0],
//   [0, 1, 0],
//   [0, 1, 0]
// ]);
// console.log(game.nextGeneration());
