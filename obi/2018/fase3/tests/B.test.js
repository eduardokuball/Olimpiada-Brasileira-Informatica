import countWalls from "../B.js";

describe("2018 -> Fase 3 -> Muro", () => {

    test("Teste 1", () => {
        const result = countWalls(11);
        expect(result).toBe(36543);
    });

    test("Teste 2", () => {
        const result = countWalls(6);
        expect(result).toBe(241);
    });

    test("Teste 3", () => {
        const result = countWalls(0);
        expect(result).toBe(1);
    });

    test("Teste 4", () => {
        const result = countWalls(8712);
        expect(result).toBe(844673301);
    });

});