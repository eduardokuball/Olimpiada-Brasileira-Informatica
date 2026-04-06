import processMatrixOperations from "../C.js";

describe("2024 -> Fase 1 -> Dança de formatura", () => {

    test("Teste 1", () => {
        const result = processMatrixOperations(4, 3, [
            ['C', 1, 3],
            ['L', 1, 4],
            ['C', 3, 2]
        ]);

        expect(result).toEqual([
            [12, 10, 11],
            [6, 4, 5],
            [9, 7, 8],
            [3, 1, 2]
        ]);
    });

    test("Teste 2", () => {
        const result = processMatrixOperations(1, 6, [
            ['C', 2, 5],
            ['C', 1, 2],
            ['C', 4, 3],
            ['C', 1, 2]
        ]);

        expect(result).toEqual([
            [1, 5, 4, 3, 2, 6]
        ]);
    });

    test("Teste 3", () => {
        const result = processMatrixOperations(5, 2, [
            ['C', 1, 2],
            ['L', 1, 3],
            ['L', 1, 4],
            ['C', 2, 1],
            ['L', 5, 3],
            ['C', 2, 1]
        ]);

        expect(result).toEqual([
            [8, 7],
            [4, 3],
            [10, 9],
            [6, 5],
            [2, 1]
        ]);
    });

});