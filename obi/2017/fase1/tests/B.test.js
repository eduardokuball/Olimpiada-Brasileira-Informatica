import calculateMinPalindromePartitions from "../B.js";

describe("2017 -> Fase 1 -> Palíndromo", () => {

    test("Teste 1", () => {
        const result = calculateMinPalindromePartitions("axa");
        expect(result).toBe(1); 
    });

    test("Teste 2", () => {
        const result = calculateMinPalindromePartitions("xyzyyx");
        expect(result).toBe(4);
    });

    test("Teste 3", () => {
        const result = calculateMinPalindromePartitions("bbabcbbaab");
        expect(result).toBe(4);
    });

});