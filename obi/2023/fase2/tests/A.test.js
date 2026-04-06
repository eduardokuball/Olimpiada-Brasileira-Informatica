import getLongestCommonPrefixLength from "../A.js";

describe("2023 -> Fase 2 -> Prefixo", () => {

    test("Teste 1", () => {
        const result = getLongestCommonPrefixLength("abacate", "abacaxi");
        expect(result).toBe(5);
    });

    test("Teste 2", () => {
        const result = getLongestCommonPrefixLength("paralelo", "paralelogramo");
        expect(result).toBe(8);
    });

    test("Teste 3", () => {
        const result = getLongestCommonPrefixLength("escola", "cola");
        expect(result).toBe(0);
    });

});