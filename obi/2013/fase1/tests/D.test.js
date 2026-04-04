import getMinimumDistance from '../D.js';

describe("2013 -> Fase 1 ->  Vende-se", () => {

    test("Teste 1", () => {
        const buildings = [10, 7, 4, 8, 2];
        const sale = 2;

        const result = getMinimumDistance(buildings, sale);

        expect(result).toBe(3);
    });

    test("Teste 2", () => {
        const buildings = [16, 11, 1, 7, 29, 4, 22, 2];
        const sale = 6;

        const result = getMinimumDistance(buildings, sale);

        expect(result).toBe(1);
    });

});