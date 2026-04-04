import isBalanced from '../E.js';

describe('2007 -> Fase 1 -> Móbile', () => {

    test('Teste 1', () => {

        const pairs = [
            [1, 0],
            [2, 1],
            [3, 2]
        ];

        const result = isBalanced(pairs);

        expect(result).toBe('bem');
    });

    test('Teste 2', () => {
    
        const pairs = [
            [1, 0],
            [2, 1],
            [4, 2],
            [3, 2],
            [5, 2]
        ];

        const result = isBalanced(pairs);

        expect(result).toBe('bem');
    });

    test('Teste 3', () => {

        const pairs = [
            [2, 0],
            [1, 2],
            [3, 1],
            [4, 3],
            [5, 4],
            [6, 4],
            [7, 5]
        ];

        const result = isBalanced(pairs);

        expect(result).toBe('mal');
    });

});