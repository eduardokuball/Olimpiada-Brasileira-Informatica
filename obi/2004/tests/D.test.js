import scrollMatrix from "../D.js";

describe("2004 -> Fase única -> TV da Vovó", () => {

    test("Teste 1", () => {

        const lines = 3;
        const columns = 3;

        const matrix = [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ];

        const operetions = [ [ 1, 0 ], [ 1, -1 ] ];

        const result = scrollMatrix(lines, columns, matrix, operetions);

        expect(result).toEqual([ [ 8, 9, 7 ], [ 2, 3, 1 ], [ 5, 6, 4 ] ]);
    });

    test("Teste 2", () => {
        
        const lines = 3;
        const columns = 4;

        const matrix = [ [ 6, 7, 8, 5 ], [ 10, 11, 12, 9 ], [ 2, 3, 4, 1 ] ];

        const operations = [ [ -3, 2 ] ];

        const result = scrollMatrix(lines, columns, matrix, operations);

        expect(result).toEqual([ [ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ], [ 9, 10, 11, 12 ] ]);
    });
})