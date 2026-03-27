import redistribution from '../E.js';

describe('2006 -> Fase 1 -> Escada Perfeita', () => {

    test('Teste 1', () => {
        
        const rocks =  [5, 4, 5, 4, 2];

        const result = redistribution(rocks);

        expect(result).toBe(5);
    });

    test('Teste 2', () => {

        const rocks = [9, 8, 7, 6, 5, 4]

        const result = redistribution(rocks);

        expect(result).toBe(9);
    });

    test('Teste 3', () => {

        const rocks = [1, 5];

        const result = redistribution(rocks);

        expect(result).toBe(-1);
    });

});