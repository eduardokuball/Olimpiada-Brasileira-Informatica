import validateBalls from "../E.js";

describe("2018 -> Fase 3 -> Bolas", () => {

    test("Teste 1", () => {
        const result = validateBalls([3, 7, 3, 3, 5, 5, 5, 9]);
        expect(result).toBe('S');
    });

    test("Teste 2", () => {
        const result = validateBalls([8, 3, 8, 8, 8, 8, 8, 0]);
        expect(result).toBe('N');
    });

});