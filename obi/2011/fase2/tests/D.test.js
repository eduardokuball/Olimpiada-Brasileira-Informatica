import getMinimumSpanningTreeCost from '../D.js';

describe("2011 -> Fase 2 -> Reduzindo detalhes em um mapa", () => {

    test("Teste 1", () => {
        const cities = 5;
        const highways = [
            [1, 2, 15],
            [1, 3, 10],
            [2, 3, 1],
            [3, 4, 3],
            [2, 4, 5],
            [4, 5, 20]
        ];

        const result = getMinimumSpanningTreeCost(cities, highways);

        expect(result).toBe(34);
    });

    test("Teste 2", () => {
        const cities = 4;
        const highways = [
            [1, 2, 1],
            [1, 3, 10],
            [1, 4, 1],
            [2, 3, 1],
            [2, 4, 10],
            [3, 4, 1]
        ];

        const result = getMinimumSpanningTreeCost(cities, highways);

        expect(result).toBe(3);
    });

});