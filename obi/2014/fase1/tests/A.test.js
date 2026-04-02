import getMinimumCost from '../A.js';

describe("2014 -> Fase 1 -> Copa do Mundo", () => {

    test("Teste 1", () => {
        const n = 3;

        const free = [
            [1, 2, 1000],
            [1, 3, 1000],
            [2, 3, 900]
        ];

        const regular = [
            [1, 3, 800],
            [2, 3, 700]
        ];

        const result = getMinimumCost(n, free, regular);

        expect(result).toBe(1900);
    });

    test("Teste 2", () => {
        const n = 5;

        const free = [
            [3, 4, 300],
            [1, 2, 100],
            [2, 4, 300],
            [1, 3, 250]
        ];

        const regular = [
            [4, 5, 600],
            [3, 4, 200],
            [2, 3, 100],
            [2, 5, 400],
            [1, 5, 450]
        ];

        const result = getMinimumCost(n, free, regular);

        expect(result).toBe(1050);
    });

    test("Teste 3", () => {
        const n = 5;

        const free = [
            [4, 5, 60],
            [2, 3, 60]
        ];

        const regular = [
            [1, 2, 50],
            [1, 4, 50],
            [3, 4, 50]
        ];

        const result = getMinimumCost(n, free, regular);

        expect(result).toBe(220);
    });

});