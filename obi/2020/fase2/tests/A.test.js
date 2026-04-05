import countSlips from "../A.js";

describe("2020 -> Fase 2 -> Dona formiga", () => {

    test("Teste 1", () => {
        const result = countSlips(
            [100, 150, -50, 200],
            [
                { start: 1, end: 2 },
                { start: 2, end: 4 },
                { start: 1, end: 4 },
                { start: 3, end: 4 },
                { start: 1, end: 3 }
            ],
            2
        );
        expect(result).toBe(2);
    });

    test("Teste 2", () => {
        const result = countSlips(
            [100, 150, -50, 200],
            [
                { start: 1, end: 2 },
                { start: 2, end: 4 },
                { start: 1, end: 4 },
                { start: 3, end: 4 },
                { start: 1, end: 3 }
            ],
            3
        );
        expect(result).toBe(0);
    });

    test("Teste 3", () => {
        const result = countSlips(
            [100, 150, -50, 200],
            [
                { start: 1, end: 2 },
                { start: 2, end: 4 },
                { start: 1, end: 4 },
                { start: 3, end: 4 },
                { start: 1, end: 3 }
            ],
            4
        );
        expect(result).toBe(3);
    });

});