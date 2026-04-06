import countGroupViolations from "../B.js";

describe("2023 -> Fase 2 -> Grupos de Trabalho", () => {

    test("Teste 1", () => {
        const groups = [[2, 1, 3]];
        const together = [[1, 2]];
        const separate = [];

        const result = countGroupViolations(groups, together, separate);
        expect(result).toBe(0);
    });

    test("Teste 2", () => {
        const groups = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
        ];

        const together = [[1, 9]];
        const separate = [[1, 3], [5, 6], [2, 8]];

        const result = countGroupViolations(groups, together, separate);
        expect(result).toBe(3);
    });

    test("Teste 3", () => {
        const groups = [
            [5, 2, 1],
            [3, 4, 6]
        ];

        const together = [];
        const separate = [[1, 5], [5, 2], [2, 3]];

        const result = countGroupViolations(groups, together, separate);
        expect(result).toBe(2);
    });

});