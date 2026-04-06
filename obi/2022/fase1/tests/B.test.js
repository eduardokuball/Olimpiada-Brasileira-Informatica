import findLastNumberWithDigitSumInRange from "../B.js";

describe("2022 -> Fase 1 -> Maior Valor", () => {

    test("Teste 1", () => {
        const result = findLastNumberWithDigitSumInRange(1, 100, 6);
        expect(result).toBe(60);
    });

    test("Teste 2", () => {
        const result = findLastNumberWithDigitSumInRange(1000, 1001, 3);
        expect(result).toBe(-1);
    });

    test("Teste 3", () => {
        const result = findLastNumberWithDigitSumInRange(80, 500, 12);
        expect(result).toBe(480);
    });

});