import getTopologicalOrder from '../C.js';

describe("2011 -> Fase 2 -> Escalonamento ótimo", () => {

    test("Teste 1", () => {
        const n = 3;
        const deps = [
            [2,0],
        ];

        const result = getTopologicalOrder(n, deps);

        expect(result).toEqual([1,2,0]);
    });

    test("Teste 2", () => {
        const n = 2;
        const deps = [
            [0, 1],
            [1, 0]
        ];

        const result = getTopologicalOrder(n, deps);

        expect(result).toEqual(['*']);
    });

});