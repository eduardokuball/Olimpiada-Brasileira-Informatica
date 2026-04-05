import findMinimumCutDifference from "../C.js";

describe("OBI 2017 -> Fase Nacional -> (Árvore - Corte)", () => {

    test("Teste 1", () => {
        const result = findMinimumCutDifference(4, [
            [1, 2],
            [2, 3],
            [3, 4]
        ]);

        expect(result).toBe(0);
    });

    test("Teste 2", () => {
        const result = findMinimumCutDifference(16, [
            [3, 5],
            [12, 3],
            [5, 1],
            [2, 1],
            [4, 1],
            [6, 1],
            [7, 1],
            [12, 8],
            [12, 9],
            [12, 10],
            [12, 11],
            [3, 13],
            [13, 14],
            [15, 13],
            [15, 16]
        ]);

        expect(result).toBe(4);
    });

});