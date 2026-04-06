import barChart from "../D.js";

describe("2025 -> Fase 1 -> Gráfico de Barras", () => {
    test("Teste 1", () => {
        const result = barChart([4, 2, 5, 3]);
        expect(result).toEqual([
            [0, 0, 1, 0],
            [1, 0, 1, 0],
            [1, 0, 1, 1],
            [1, 1, 1, 1],
            [1, 1, 1, 1]
        ]);
    });

    test("Teste 2", () => {
        const result = barChart([1, 2, 1, 2, 1]);
        expect(result).toEqual([
            [0, 1, 0, 1, 0],
            [1, 1, 1, 1, 1]
        ]);
    });

    test("Teste 3", () => {
        const result = barChart([1, 2, 3, 4, 5, 6, 7, 8]);
        expect(result).toEqual([
            [0,0,0,0,0,0,0,1],
            [0,0,0,0,0,0,1,1],
            [0,0,0,0,0,1,1,1],
            [0,0,0,0,1,1,1,1],
            [0,0,0,1,1,1,1,1],
            [0,0,1,1,1,1,1,1],
            [0,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1]
        ]);
    });

});
