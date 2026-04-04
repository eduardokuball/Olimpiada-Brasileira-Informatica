import minPalindromePartitions from "../C.js";

describe("2004 -> Fase única -> Palíndrome", () => {

    test("Teste 1", () => {

        const string = "axa";
        const size = string.length;

        const result = minPalindromePartitions(string, size);

        expect(result).toBe(1);
    });

    test("Teste 2", () => {

        const string = "xyzyyx"
        const size = string.length;

        const result = minPalindromePartitions(string, size);

        expect(result).toBe(4);
    });

    test("Teste 3", () => {

        const string = "bbabcbbaab";
        const size = string.length;

        const result = minPalindromePartitions(string, size);

        expect(result).toBe(4);
    });
})