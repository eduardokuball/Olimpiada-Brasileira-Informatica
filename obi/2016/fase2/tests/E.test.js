import calculateMaxPaths from "../E.js";

describe("2016 -> Fase 2 -> Ciclovias", () => {

    test("Teste 1", () => {
        const result = calculateMaxPaths(5, [ [ 1, 5 ], [ 1, 3 ], [ 1, 2 ], [ 2, 5 ], [ 4, 5 ] ]);

        expect(result).toEqual([4,4,4,2,2]);
    });

    test("Teste 2", () => {
        const result = calculateMaxPaths(6, [ [ 1, 3 ], [ 2, 3 ], [ 4, 2 ], [ 3, 4 ], [ 3, 5 ], [ 5, 4 ] ]);

        expect(result).toEqual([7, 5, 6, 4, 2, 1]);
    });

    test("Teste 3", () => {
        const result = calculateMaxPaths(7, [ [ 1, 2 ], [ 1, 3 ], [ 3, 5 ], [ 3, 6 ], [ 5, 4 ], [ 4, 7 ] ]);

        expect(result).toEqual([5, 6, 4, 2, 3, 2, 2]);
    });

});