import oddNumberObsession from '../B.js';

describe('2025 -> Fase 2 -> Mania de ímpar', () => {

    test('Teste 1', () => {
        const input = [
            [1, 2, 1],
            [2, 2, 2],
            [1, 2, 1]
        ];

        const [drops, result] = oddNumberObsession(input);

        expect(drops).toBe(1);
        expect(result).toEqual([
            [1, 2, 1],
            [2, 3, 2],
            [1, 2, 1]
        ]);
    });

    test('Teste 2', () => {
        const input = [
            [8, 7, 2, 5, 7],
            [9, 9, 9, 8, 7],
            [2, 7, 4, 5, 6],
            [6, 2, 8, 2, 1],
            [2, 3, 4, 7, 8]
        ];

        const [drops, result] = oddNumberObsession(input);

        expect(drops).toBe(4);
        expect(result).toEqual([
            [8, 7, 2, 5, 8],
            [9, 10, 9, 8, 7],
            [2, 7, 4, 5, 6],
            [7, 2, 9, 2, 1],
            [2, 3, 4, 7, 8]
        ]);
    });

    test('Teste 3', () => {
        const input = [
            [1, 2, 3, 4, 5]
        ];

        const [drops, result] = oddNumberObsession(input);

        expect(drops).toBe(0);
        expect(result).toEqual([
            [1, 2, 3, 4, 5]
        ]);
    });

});