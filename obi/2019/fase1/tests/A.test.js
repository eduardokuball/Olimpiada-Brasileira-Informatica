import maxAlternatingSubsequenceLength from "../A.js";

describe("2019 -> Fase 1 -> Calçada Imperial", () => {

    test("Teste 1", () => {
        const result = maxAlternatingSubsequenceLength([1]);
        expect(result).toBe(1);
    });

    test("Teste 2", () => {
        const result = maxAlternatingSubsequenceLength([
            3, 2, 5, 2, 10, 4, 4, 7, 12, 2, 8, 10
        ]);
        expect(result).toBe(4);
    });

});