import macawsInCages from "../A.js";

describe("2025 -> Fase 2 -> Arara!", () => {

    test("Teste 1 ", () => {

        const macaws = 2;
        const cages = 10;

        const result = macawsInCages(cages,macaws);

        expect(result).toBe("S");
    });

    test("Teste 2", () => {

        const macaws = 3;
        const cages = 10;

        const result = macawsInCages(cages,macaws);

        expect(result).toBe("N");

    });

    test("Teste 3", () => {

        const macaws = 3;
        const cages = 11;

        const result = macawsInCages(cages,macaws);

        expect(result).toBe("S");

    })
});