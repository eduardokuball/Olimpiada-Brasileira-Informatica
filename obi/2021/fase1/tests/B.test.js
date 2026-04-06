import calculateFinalSum from "../B.js";

describe("2021 -> Fase 1 -> Zero para cancelar", () => {

    test("Teste 1", () => {
        const result = calculateFinalSum([3, 0, 4, 0]);
        expect(result).toBe(0);
    });

    test("Teste 2", () => {
        const result = calculateFinalSum([1, 3, 5, 4, 0, 0, 7, 0, 0, 6]);
        expect(result).toBe(7);
    });

});