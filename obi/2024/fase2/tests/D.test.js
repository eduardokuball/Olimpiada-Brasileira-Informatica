import powerGame from "../D.js";

describe("2024 -> Fase 2 -> Jogo do Poder", () => {

    test("Teste 1", () => {
        const board = [
            [2, 3, 9],
            [1, 7, 200]
        ];

        const result = powerGame(board);

        expect(result).toEqual([
            [6, 6, 22],
            [1, 22, 222]
        ]);
    });

    test("Teste 2", () => {
        const board = [
            [6, 3, 10, 1, 20, 7, 7]
        ];

        const result = powerGame(board);

        expect(result).toEqual([
            [9, 3, 54, 1, 54, 14, 14]
        ]);
    });

    test("Teste 3", () => {
        const board = [
            [10, 10, 10, 10, 10, 10],
            [10, 10, 1, 1, 1, 10],
            [10, 10, 10, 1, 10, 10],
            [10, 10, 10, 4, 10, 10],
            [10, 10, 10, 10, 10, 2]
        ];

        const result = powerGame(board);

        expect(result).toEqual([
            [250, 250, 250, 250, 250, 250],
            [250, 250, 8, 8, 8, 250],
            [250, 250, 250, 8, 250, 250],
            [250, 250, 250, 8, 250, 250],
            [250, 250, 250, 250, 250, 2]
        ]);
    });

});