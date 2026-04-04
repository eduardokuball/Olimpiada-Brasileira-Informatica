import countRectangles from '../A.js';

describe('2010 -> Fase 2 -> Floresta', () => {

    test('Teste 1', () => {
        const trees = 23;

        const result = countRectangles(trees);

        expect(result).toBe(2);
    });

    test('Teste 2', () => {
        const trees = 7;

        const result = countRectangles(trees);

        expect(result).toBe(0);
    });

    test('Teste 3', () => {
        const trees = 53;

        const result = countRectangles(trees);

        expect(result).toBe(3);
    });

});