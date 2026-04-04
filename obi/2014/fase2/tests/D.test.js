import countValidPairs from '../D.js';

describe("2014 -> Fase 2 -> Mapa", () => {

    test("Teste 1", () => {
        const n = 4;
        const edges = [ [ 1, 2, 0 ], [ 2, 3, 1 ], [ 3, 4, 0 ] ]

        const result = countValidPairs(n, edges);

        expect(result).toBe(4);
    });

    test("Teste 2", () => {
        const n = 6;
        const edges = [ [ 1, 2, 0 ], [ 2, 3, 1 ], [ 3, 4, 0 ], [ 2, 5, 0 ], [ 5, 6, 1 ] ]
        const result = countValidPairs(n, edges);

        expect(result).toBe(11);
    });

});