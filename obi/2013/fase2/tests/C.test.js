import countDifferentFamilies from '../C.js';

describe("2013 -> Fase 2 -> Famílias de Troia", () => {

    test("Teste 1", () => {
        const n = 4;
        const relations = [
            [1, 2],
            [2, 3],
            [3, 4],
            [4, 1]
        ];

        const result = countDifferentFamilies(n, relations);

        expect(result).toBe(1);
    });

    test("Teste 2", () => {
        const n = 8;
        const relations = [
            [1, 2],
            [2, 3],
            [3, 6],
            [6, 5],
            [5, 4],
            [4, 3],
            [6, 7],
            [7, 8],
            [8, 1],
            [1, 5]
        ];

        const result = countDifferentFamilies(n, relations);

        expect(result).toBe(1);
    });

    test("Teste 3", () => {
        const n = 9;
        const relations = [
            [1, 2],
            [2, 3],
            [3, 6],
            [4, 3],
            [6, 5],
            [7, 8],
            [1, 4],
            [6, 2]
        ];

        const result = countDifferentFamilies(n, relations);

        expect(result).toBe(3);
    });

});