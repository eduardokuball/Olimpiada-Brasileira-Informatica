import minPenalty from '../A.js';

describe('2006 -> Fase 2 -> Penalidade Mínima', () => {

    test('Teste 1', () => {

        const matrix = [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]

        const result = minPenalty(matrix);

        expect(result).toBe(0);
    });

    test('Teste 2', () => {

        const matrix = [ [ 5, 7, 6 ], [ 4, 0, 1 ], [ 3, 2, 5 ] ]

        const result = minPenalty(matrix);

        expect(result).toBe(1);
    });

    test("Teste 3", () => {

        const matrix = [ [ 1, 3, 0, 0 ], [ 0, 8, 2, 25 ], [ 6, 5, 0, 3 ], [ 0, 15, 7, 4 ] ];

        const result = minPenalty(matrix);

        expect(result).toBe(2);
    })

});