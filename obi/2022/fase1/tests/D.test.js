import countSubarraysWithSum from "../D.js";

describe("2022 -> Fase 1 -> Chuva", () => {

    test("Teste 1", () => {
        const result = countSubarraysWithSum([0, 2, 0, 1, 0, 1], 2);
        expect(result).toBe(6);
    });

    test("Teste 2", () => {
        const result = countSubarraysWithSum([10, 1, 0, 0, 9, 10, 1, 5], 13);
        expect(result).toBe(0);
    });

    test("Teste 3", () => {
        const result = countSubarraysWithSum([1, 0, 3, 0, 2], 6);
        expect(result).toBe(1);
    });

});