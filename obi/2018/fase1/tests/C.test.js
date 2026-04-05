import calculateNetworkDifference from "../C.js";

describe("2018 -> Fase 1 -> Ilhas", () => {

    test("Teste 1", () => {
        const result = calculateNetworkDifference(
            4,
            [
                [2, 1, 5],
                [1, 3, 4],
                [2, 3, 6],
                [4, 2, 8],
                [3, 4, 12]
            ],
            1
        );

        expect(result).toBe(9);
    });

    test("Teste 2", () => {
        const result = calculateNetworkDifference(
            6,
            [
                [1, 2, 3],
                [6, 1, 9],
                [2, 6, 10],
                [2, 3, 8],
                [5, 3, 3],
                [4, 3, 2],
                [2, 4, 12],
                [6, 4, 1],
                [4, 5, 9],
                [1, 5, 16],
                [5, 6, 5]
            ],
            5
        );

        expect(result).toBe(11);
    });

});