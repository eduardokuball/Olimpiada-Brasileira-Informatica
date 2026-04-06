import findMissingNumberInSquare from "../C.js";

describe("2022 -> Fase 1 -> Quadrado Mágico", () => {

    test("Teste 1", () => {
        const square = [
            [2, 9, 4],
            [7, 0, 3],
            [6, 1, 8]
        ];

        const result = findMissingNumberInSquare(square);
        expect(result).toEqual([5, 2, 2]);
    });

    test("Teste 2", () => {
        const square = [
            [11, 8, 5, 0],
            [14, 1, 4, 15],
            [2, 13, 16, 3],
            [7, 12, 9, 6]
        ];

        const result = findMissingNumberInSquare(square);
        expect(result).toEqual([10, 1, 4]);
    });

});