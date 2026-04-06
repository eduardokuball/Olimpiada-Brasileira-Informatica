import isSubsequence from "../C.js";

describe("2023 -> Fase 1 -> Subsequência", () => {

    test("Teste 1", () => {
        const result = isSubsequence([1, 2, 3, 4, 5], [2, 3, 5]);
        expect(result).toBe(true);
    });

    test("Teste 2", () => {
        const result = isSubsequence([8, 17, 8, 21, 23], [8, 8, 21, 22]);
        expect(result).toBe(false);
    });

});