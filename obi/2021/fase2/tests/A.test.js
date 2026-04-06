import findMinMaxWithDigitSum from "../A.js";

describe("2021 -> Fase 2 -> Mínimo e Máximo", () => {

    test("Teste 1", () => {
        const result = findMinMaxWithDigitSum(3, 10, 30);
        expect(result).toEqual([12, 30]);
    });

    test("Teste 2", () => {
        const result = findMinMaxWithDigitSum(12, 100, 500);
        expect(result).toEqual([129, 480]);
    });

    test("Teste 3", () => {
        const result = findMinMaxWithDigitSum(18, 1, 100);
        expect(result).toEqual([99, 99]);
    });

});