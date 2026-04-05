import areAnagrams from "../B.js";

describe("2020 -> Fase 1 -> Garamana", () => {

    test("Teste 1", () => {
        const result = areAnagrams("roma", "ator");
        expect(result).toBe('N');
    });

    test("Teste 2", () => {
        const result = areAnagrams("olimpiada", "poliamida");
        expect(result).toBe('S');
    });

    test("Teste 3", () => {
        const result = areAnagrams("microfone", "*conform*");
        expect(result).toBe('S');
    });

});