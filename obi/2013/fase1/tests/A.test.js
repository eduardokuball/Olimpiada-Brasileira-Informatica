import canFitWithCut from '../A.js';

describe("2013 -> Fase 1 -> Lençol", () => {

    test("Teste 1", () => {
        const result = canFitWithCut(4, 2, 3, 5, 4, 4);
        expect(result).toBe('S');
    });

    test("Teste 2", () => {
        const result = canFitWithCut(4, 2, 2, 5, 4, 5);
        expect(result).toBe('N');
    });

    test("Teste 3", () => {
        const result = canFitWithCut(1, 2, 3, 5, 5, 2);
        expect(result).toBe('S');
    });

    test("Teste 4", () => {
        const result = canFitWithCut(3, 4, 10, 9, 9, 10);
        expect(result).toBe('S');
    });

});