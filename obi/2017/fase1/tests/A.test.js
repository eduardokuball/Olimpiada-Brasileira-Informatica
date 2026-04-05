import calculateMoves from "../A.js";

describe("2017 -> Fase 1 -> Game-10", () => {

    test("Teste 1", () => {
        const result = calculateMoves(3, 2, 1);
        expect(result).toBe(1);
    });

    test("Teste 2", () => {
        const result = calculateMoves(20, 8, 13);
        expect(result).toBe(15);
    });

});