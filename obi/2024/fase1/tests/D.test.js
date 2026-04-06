import simulateGameOfLife from "../D.js";

describe("2024 -> Fase 1 -> Jogo da vida", () => {

    test("Teste 1", () => {
        const game = [
            [0,0,0,0,0],
            [0,1,1,1,0],
            [0,1,0,0,0],
            [0,0,1,0,0],
            [0,0,0,0,0],
        ];

        const result = simulateGameOfLife(game, 3);

        expect(result).toEqual([
            [0,1,1,0,0],
            [1,1,0,0,0],
            [0,0,1,0,0],
            [0,0,0,0,0],
            [0,0,0,0,0],
        ]);
    });

    
});