import canServeAllPeople from "../C.js";

describe("2020 -> Fase 1 -> Camisetas da Olimpíada", () => {

    test("Teste 1", () => {
        const result = canServeAllPeople([1,1,2,1,2], 3, 2);
        expect(result).toBe('S');
    });

    test("Teste 2", () => {
        const result = canServeAllPeople([2,2,2,2], 1, 3);
        expect(result).toBe('N');
    });

    test("Teste 3", () => {
        const result = canServeAllPeople([1,1,1,2,1,1], 4, 4);
        expect(result).toBe('N');
    });

});