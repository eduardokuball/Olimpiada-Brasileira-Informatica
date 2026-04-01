import getMagicSquareValue from '../A.js';

describe("2011 -> Fase 2 -> Quadrado Mágico", () => {

    test("Teste 1", () => {
        const square = [
            [1, 1, 1],
            [1, 1, 1],
            [1, 1, 1]
        ];

        const result = getMagicSquareValue(square);

        expect(result).toBe(0);
    });

    test("Teste 2", () => {
        const square = [
            [16, 3, 2, 13],
            [5, 10, 11, 8],
            [9, 6, 7, 12],
            [4, 15, 14, 1]
        ];

        const result = getMagicSquareValue(square);

        expect(result).toBe(34);
    });

    test("Teste 3", () => {
        const square = [
            [4, 8, 9],
            [11, 7, 3],
            [6, 5, 10]
        ];

        const result = getMagicSquareValue(square);

        expect(result).toBe(0);
    });

});