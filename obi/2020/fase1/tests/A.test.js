import calculateOldestAge from "../A.js";

describe("2020 -> Fase 1 -> Irmãos", () => {

    test("Teste 1", () => {
        const result = calculateOldestAge(13, 16);
        expect(result).toBe(19);
    });

    test("Teste 2", () => {
        const result = calculateOldestAge(14, 14);
        expect(result).toBe(14);
    });

});