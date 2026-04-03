import calculateMinimumMoves from "../A.js";

describe("2016 -> Fase 1 -> Lâmpadas no hotel", () => {

    test("Teste 1", () => {
        const result = calculateMinimumMoves([0,0,1,1]);
        expect(result).toBe(1);
    });

    test("Teste 2", () => {
        const result = calculateMinimumMoves([0,0,0,1]);
        expect(result).toBe(2);
    });


});