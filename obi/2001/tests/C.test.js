import findBestVillage from "../C";

describe("2001 -> Fase única -> Dengue", () => {

    test("Teste 1", () => {
        const villagesQuantity = 2;
        const edges = [ [ 1, 2 ] ]

        const result = findBestVillage(villagesQuantity, edges);

        expect(result).toBe(1)

    });

    test("Teste 2", () => {
        const villagesQuantity = 7;
        const edges = [ [ 1, 2 ], [ 2, 5 ], [ 7, 4 ], [ 7, 2 ], [ 4, 6 ], [ 3, 4 ] ]

        const result = findBestVillage(villagesQuantity, edges);

        expect(result).toBe(7)

    });

    test("Teste 3", () => {
        const villagesQuantity = 1;
        const edges = [];

        const result = findBestVillage(villagesQuantity, edges);

        expect(result).toBe(1)

    });


})