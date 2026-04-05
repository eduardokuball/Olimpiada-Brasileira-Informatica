import findMatchingWord from "../E.js";

describe("2017 -> Fase 3 -> Código", () => {

    test("Teste 1", () => {
        const result = findMatchingWord([
            "aaaaaaabbb",
            "yyuudiwwkl",
            "kkfidaaooa"
        ]);
        expect(result).toBe("ok");
    });

    test("Teste 2", () => {
        const result = findMatchingWord([
            "aaaaaaabbb",
            "yyuudiwwkl",
            "kkfidaaooa",
            "aooaaaaaaa"
        ]);
        expect(result).toBe("aooaaaaaaa");
    });

    test("Teste 3", () => {
        const result = findMatchingWord([
            "jfjshiddds"
        ]);
        expect(result).toBe("ok");
    });

    test("Teste 4", () => {
        const result = findMatchingWord([
            "abcdefghij",
            "abcdefghij"
        ]);
        expect(result).toBe("abcdefghij");
    });

    test("Teste 5", () => {
        const result = findMatchingWord([
            "xfwvijuydq",
            "hcprvezofg",
            "hwykagqawu",
            "givfzndqpy",
            "yvfiqgadfc",
            "wuhcprvezo",
            "qaswiksscl",
            "uchskpkcit"
        ]);
        expect(result).toBe("wuhcprvezo");
    });

});