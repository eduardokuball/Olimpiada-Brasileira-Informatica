import buildSquare from '../D.js';

describe('2011 -> Fase 1 -> Quadrado Aritmético', () => {

    test('Teste 1', () => {
        const dimension = 2;
        const targetSum = 49;

        const result = buildSquare(dimension, targetSum);

        expect(result).toEqual([ [ 0, 1 ], [ 48, 49 ] ]);
    });

    test('Teste 2', () => {
        const dimension = 3;
        const targetSum = 53;

        const result = buildSquare(dimension, targetSum);

        expect(result).toEqual([ [ 0, 1, 2 ], [ 3, 4, 5 ], [ 47, 48, 49 ] ]);
    });

    test('Teste 3', () => {
        const dimension = 1;
        const targetSum = -55;

        const result = buildSquare(dimension, targetSum);

        expect(result).toEqual([[-55]]);
    });

});