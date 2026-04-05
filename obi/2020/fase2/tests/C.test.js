import findMinimumRouteTime from "../C.js";

describe("2020 -> Fase 2 -> Caixeiro Viajante", () => {

    test("Teste 1", () => {
        const result = findMinimumRouteTime(
            3,
            [
                [1, 2, 5],
                [1, 3, 2],
                [2, 3, 4]
            ]
        );
        expect(result).toBe(7);
    });

    test("Teste 2", () => {
        const result = findMinimumRouteTime(
            4,
            [
                [1, 2, 15],
                [1, 3, 7],
                [1, 4, 8],
                [2, 3, 16],
                [2, 4, 9],
                [3, 4, 12]
            ]
        );
        expect(result).toBe(31);
    });

});