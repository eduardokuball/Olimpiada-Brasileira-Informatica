import processOperations from "../B.js";

describe("2020 -> Fase 3 -> Candidatas", () => {

    test("Teste 1", () => {
        const result = processOperations(
            [9, 3, 4, 8, 1],
            [
                [2, 2, 5]
            ]
        );
        expect(result).toEqual([4]);
    });

    test("Teste 2", () => {
        const result = processOperations(
            [4, 4, 4, 4],
            [
                [2, 1, 4],
                [1, 3, 5],
                [2, 1, 4]
            ]
        );
        expect(result).toEqual([10, 5]);
    });

    test("Teste 3", () => {
        const result = processOperations(
            [2, 3, 6, 4, 1],
            [
                [2, 1, 4],
                [1, 3, 1],
                [2, 3, 5]
            ]
        );
        expect(result).toEqual([6, 1]);
    });

});