import getGameLeafNodes from '../E.js';

describe("2011 -> Fase 2 -> Vira!", () => {

    test("Teste 1", () => {
        const start = "B P B P P";

        const result = getGameLeafNodes(start);

        expect(result).toBe(15);
    });

    test("Teste 2", () => {
        const start = "B P B";

        const result = getGameLeafNodes(start);

        expect(result).toBe(2);
    });

});