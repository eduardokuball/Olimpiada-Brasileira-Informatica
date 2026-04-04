import jumps from '../C.js';

describe('2007 -> Fase 1 -> Labirinto', () => {

    test('Teste 1', () => {
        const matrix = [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ];

        const result = jumps(matrix);

        expect(result).toBe(5);
    });

    test('Teste 2', () => {
        const matrix = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
        ];

        const result = jumps(matrix);

        expect(result).toBe(12);
    });

    test('Teste 3', () => {
        const matrix = [
            [1, 3, 1, 1, 1],
            [1, 3, 1, 3, 1],
            [1, 1, 1, 3, 1]
        ];

        const result = jumps(matrix);

        expect(result).toBe(10);
    });

});