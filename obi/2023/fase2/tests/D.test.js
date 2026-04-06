import getMaxMinCapacity from "../D.js";

describe("2023 -> Fase 2 -> Barcos da Nlogônia", () => {

    test("Teste 1", () => {
        const islands = 5;
        const edges = [
            [1,4,50],
            [1,5,85],
            [2,3,60],
            [2,4,80],
            [4,5,75],
            [1,3,40]
        ];

        const queries = [
            [2,1],
            [1,3]
        ];

        const result = getMaxMinCapacity(islands, edges, queries);
        expect(result).toEqual([75, 60]);
    });

    test("Teste 2", () => {
        const islands = 7;
        const edges = [
            [1,2,30],
            [2,3,20],
            [3,4,10],
            [4,5,50],
            [5,6,40],
            [6,7,100]
        ];

        const queries = [
            [2,7],
            [4,7],
            [1,3],
            [6,7]
        ];

        const result = getMaxMinCapacity(islands, edges, queries);
        expect(result).toEqual([10, 40, 20, 100]);
    });

});