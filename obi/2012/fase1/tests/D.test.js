import canPatrolAllTrees from '../D.js';

describe("2012 -> Fase 1 -> Tarzan", () => {

    test("Teste 1", () => {
        const jungle = [
            { x: 1, y: 1 },
            { x: 6, y: 1 },
            { x: 6, y: 6 },
            { x: 11, y: 6 }
        ];
        const reach = 5;

        const result = canPatrolAllTrees(jungle, reach);

        expect(result).toBe("S");
    });

   test("Teste 1", () => {
        const jungle = [
            { x: 1, y: 1 },
            { x: 6, y: 6 },
            { x: 11, y: 6 },
            { x: 13, y: 8 }
        ];
        const reach = 5;

        const result = canPatrolAllTrees(jungle, reach);

        expect(result).toBe("N");
    });

});