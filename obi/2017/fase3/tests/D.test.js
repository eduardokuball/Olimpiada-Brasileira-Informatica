import processFenwickQueries from "../D.js";

describe("2017 -> Fase 3 -> Arranha-céu", () => {

    test("Teste 1", () => {
        const result = processFenwickQueries(
            8,
            [30, 2, 0, 42, 10, 11, 11, 9],
            [
                [1, 5],
                [0, 4, 12],
                [1, 5],
                [1, 1]
            ]
        );

        expect(result).toEqual([84, 54, 30]);
    });

    test("Teste 2", () => {
        const result = processFenwickQueries(
            1,
            [0],
            [
                [1, 1]
            ]
        );

        expect(result).toEqual([0]);
    });

});