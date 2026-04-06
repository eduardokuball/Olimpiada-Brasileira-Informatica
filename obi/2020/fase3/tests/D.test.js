import maximizeWhitePieces from "../D.js";

describe("2020 -> Fase 3 -> Jogo do pretoe e branco", () => {

    test("Teste 1", () => {
        const result = maximizeWhitePieces(
            3, 3,
            [
                [1, 1],
                [1, 3],
                [3, 2]
            ]
        );
        expect(result).toBe(3);
    });

    test("Teste 2", () => {
        const result = maximizeWhitePieces(
            1, 6,
            [
                [1, 2],
                [1, 5]
            ]
        );
        expect(result).toBe(3);
    });

    test("Teste 3", () => {
        const result = maximizeWhitePieces(
            3, 5,
            [
                [2, 2],
                [2, 3],
                [3, 5]
            ]
        );
        expect(result).toBe(5);
    });

});