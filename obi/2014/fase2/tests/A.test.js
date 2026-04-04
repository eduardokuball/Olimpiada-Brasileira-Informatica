import getMostFrequentNote from '../A.js';

describe("2014 -> Fase 2 -> Notas", () => {

    test("Teste 1", () => {
        const grades = [1, 2, 2, 3];
        const result = getMostFrequentNote(grades);
        expect(result).toBe(2);
    });

    test("Teste 2", () => {
        const grades = [1, 1, 2, 2];
        const result = getMostFrequentNote(grades);
        expect(result).toBe(2); 
    });

    test("Teste 3", () => {
        const grades = [5, 5, 5, 4, 4, 4, 6];
        const result = getMostFrequentNote(grades);
        expect(result).toBe(5);
    });

});