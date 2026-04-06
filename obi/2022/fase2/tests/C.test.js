import getLongestPalindromeSubstringLength from "../C.js";

describe("2022 -> Fase 2 -> Subcadeias", () => {

    test("Teste 1", () => {
        const result = getLongestPalindromeSubstringLength("vovossorirmirim");
        expect(result).toBe(5);
    });

    test("Teste 2", () => {
        const result = getLongestPalindromeSubstringLength("abxxxxba");
        expect(result).toBe(8);
    });

});