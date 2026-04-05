import countSubarraysWithSum from "../C.js";

describe("2019 -> Fase 1 -> Soma", () => {

    test("Teste 1", () => {
        const result = countSubarraysWithSum(
            [2, 0, 1, 1, 0, 0, 8, 4, 1, 3],
            4
        );
        expect(result).toBe(5);
    });

    test("Teste 2", () => {
        const result = countSubarraysWithSum(
            [0, 0, 0, 0, 0, 5, 12, 0, 1, 0, 0, 0, 51, 0, 0],
            0
        );
        expect(result).toBe(25);
    });

});