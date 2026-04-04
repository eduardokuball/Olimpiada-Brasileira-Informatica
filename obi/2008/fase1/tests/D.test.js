import solve from "../D.js";

describe("2008 -> Fase 1 -> Lanche", () => {

    test("Teste 1", () => {

        const s = 4;
        const edges = [
            [1, 2, 1],
            [2, 3, 1],
            [2, 4, 2],
            [3, 4, 1],
            [1, 4, 1],
            [3, 1, 4]
        ];

        const result = solve(s,edges);

        expect(result).toBe(2);
    });

    test("Teste 2", () => {

        const s = 4;
        const edges = [[1, 2, 10],
        [2, 3, 1],
        [3, 4, 4],
        [2, 4, 3]];

        const result = solve(s,edges);

        expect(result).toBe(10);
    });

    test("Teste 3", () => {

        const s = 5;
        const edges = [
            [1, 2, 10],
            [2, 3, 10],
            [2, 4, 11],
            [2, 5, 11],
            [3, 4, 10],
            [4, 5, 10]
        ];

        const result = solve(s,edges);

        expect(result).toBe(11);

    })
})