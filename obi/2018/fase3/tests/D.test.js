import maximin from '../D.js';

describe('2018 -> Fase 3 -> Maximin', () => {

    test('Teste 1', () => {
        const min = 7;
        const max = 37;
        const numbers = [10, 17, 28];

        const result = maximin(min, max, numbers);

        expect(result).toBe(9);
    });

    test('Teste 2', () => {
        const min = -6;
        const max = 6;
        const numbers = [8, -4, -3, 6, 12];

        const result = maximin(min, max, numbers);

        expect(result).toBe(4);
    });

});