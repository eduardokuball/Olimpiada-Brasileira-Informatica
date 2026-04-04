import getMinimumPathCost from '../C.js';

describe("2015 -> Fase 2 -> Mina", () => {

    test("Teste 1", () => {
        const grid = [
            [ 0, 1, 0, 0, 0, 0 ],
            [ 1, 1, 0, 0, 1, 1 ],
            [ 1, 0, 1, 1, 1, 1 ],
            [ 0, 0, 0, 1, 1, 0 ],
            [ 0, 0, 1, 1, 1, 0 ],
            [ 0, 1, 0, 0, 0, 0 ]
            ]

        const result = getMinimumPathCost(grid);

        expect(result).toBe(3); 
    });

    test("Teste 2", () => {
        const grid = [ [ 0, 0 ], [ 1, 0 ] ];

        const result = getMinimumPathCost(grid);

        expect(result).toBe(0);
    });

});