import countValidTours from "../D.js";

describe("2023 -> Fase 1 -> Sr. Toupeira", () => {

    test("Teste 1", () => {
        const tunnels = [
            [2, 3],
            [3, 4],
            [4, 2],
            [3, 5],
            [1, 5],
            [1, 2]
        ];

        const tours = [
            [5, 3, 4, 3, 2],
            [1, 2, 3, 5, 4, 2]
        ];

        const result = countValidTours(tunnels, tours);
        expect(result).toBe(1);
    });

    test("Teste 2", () => {
        const tunnels = [
            [1, 2],
            [3, 4]
        ];

        const tours = [
            [1, 2, 1, 2],
            [4, 3, 4, 3, 4],
            [1, 4]
        ];

        const result = countValidTours(tunnels, tours);
        expect(result).toBe(2);
    });

    test("Teste 3", () => {
        const tunnels = [
            [1, 2],
            [2, 3],
            [3, 4]
        ];

        const tours = [
            [1, 2, 1, 2],
            [3, 4, 3, 2, 3],
            [1, 2, 3, 2, 1, 2, 3, 4],
            [1, 3]
        ];

        const result = countValidTours(tunnels, tours);
        expect(result).toBe(3);
    });

});