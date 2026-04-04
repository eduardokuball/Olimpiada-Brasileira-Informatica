import processQueries from '../E.js';

describe("2014 -> Fase 2 -> Frequência", () => {

    test("Teste 1", () => {
        const n = 5;
        const queries = [
            [3, 1], [1, 1, 2],
            [1, 3, 4], [1, 4, 4],
            [4, 2], [2, 2, 5],
            [2, 3, 5], [2, 4, 5],
            [3, 3]
        ]

        const result = processQueries(n, queries);

        expect(result).toEqual([0, 4, 5]);
    });

    test("Teste 2", () => {
        const n = 2;
        const queries = [ [ 1, 1, 1 ], [ 2, 2, 2 ], [ 3, 1 ], [ 3, 2 ] ];

        const result = processQueries(n, queries);

        expect(result).toEqual([2,2]);
    });

    test("Teste 3", () => {

        const n = 3;
        const queries = [
            [1, 1, 2],
            [1, 2, 3],
            [1, 3, 4],
            [4, 3],
            [1, 3, 0],
            [4, 3]
        ];

        const result = processQueries(n, queries);

        expect(result).toEqual([4,3]);
    })

});