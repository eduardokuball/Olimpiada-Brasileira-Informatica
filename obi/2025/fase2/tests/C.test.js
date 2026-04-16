import distinctChallenge from '../C.js';

describe('2025 -> Fase 2 -> Um Desafio Muito Distinto', () => {

    test('Teste 1', () => {
        const input = [
            [7, 3, 7],
            [8, 3, 7]
        ];

        const result = distinctChallenge(input);

        expect(result).toEqual([2, 3]);
    });

    test('Teste 2', () => {
        const input = [
            [10, 1, 3]
        ];

        const result = distinctChallenge(input);

        expect(result).toEqual([3]);
    });

    test('Teste 3', () => {
        const input = [
            [20, 10, 11],
            [40, 1, 10],
            [40, 10, 20],
            [5, 5, 5]
        ];

        const result = distinctChallenge(input);

        expect(result).toEqual([2, 9, 4, 1]);
    });


});