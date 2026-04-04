import calculateGenerationPercentages from '../C.js';

describe("2015 -> Fase 1 -> Família real", () => {

    test("Teste 1", () => {
        const n = 9;
        const parents = [7, 3, 0, 9, 0,3, 5, 6, 7];
        const present = [ 3, 2, 8, 1, 9 ];

        const result = calculateGenerationPercentages(n, parents, present);

        expect(result).toEqual(["50.00", "33.33", "100.00", "0.00"]);
    });

    test("Teste 2", () => {
        const n = 16;
        const parents = [15, 9,  2,  8,  6, 11,0, 3,  0,  8, 12,  0,9, 6, 16, 12];
        const present = [5, 14,  9, 12,  6,2,  4, 10,  3, 11,7]

        const result = calculateGenerationPercentages(n, parents, present);

        expect(result).toEqual(["100.00", "50.00", "66.67", "50.00", "100.00"]);
    });

});