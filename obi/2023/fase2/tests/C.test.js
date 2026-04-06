import getLongestDistinctSubarrayLength from "../C.js";

describe("2023 -> Fase 2 -> Intervalos Distintos", () => {

    test("Teste 1", () => {
        const result = getLongestDistinctSubarrayLength([3,2,1,3,2,1,3,2]);
        expect(result).toBe(3);
    });

    test("Teste 2", () => {
        const result = getLongestDistinctSubarrayLength([3,2,3,8,5,5]);
        expect(result).toBe(4);
    });

});