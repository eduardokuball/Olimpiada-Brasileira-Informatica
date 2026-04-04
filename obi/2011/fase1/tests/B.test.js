import findTreasure from '../B.js';

describe('2011 -> Fase 1 -> Caça ao Tesouro', () => {

    test('Teste 1', () => {
        const dimension = 4;
        const hint = 2;
        const hintsInput = [
            [0, 0, 3],
            [3, 0, 4]
        ];

        const result = findTreasure(dimension, hint, hintsInput);

        expect(result).toEqual([1, 2]);
    });

    test('Teste 2', () => {
        const dimension = 4;
        const hint = 4;
        const hintsInput = [
            [1, 0, 3],
            [1, 1, 2],
            [1, 2, 1],
            [1, 3, 2]
        ];

        const result = findTreasure(dimension, hint, hintsInput);

        expect(result).toEqual([-1, -1]);
    });

    test('Teste 3', () => {
        const dimension = 3;
        const hint = 3;
        const hintsInput = [
            [0, 0, 2],
            [1, 1, 2],
            [2, 0, 4]
        ];

        const result = findTreasure(dimension, hint, hintsInput);

        expect(result).toEqual([0, 2]);
    });

});