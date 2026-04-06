import countPaintedCubes from "../A.js";

describe("2024 -> Fase 1 -< Cubo Preto", () => {

    test("Teste 1", () => {
        const result = countPaintedCubes(4);
        expect(result).toEqual([8, 24, 24, 8]);
    });

    test("Teste 2", () => {
        const result = countPaintedCubes(2);
        expect(result).toEqual([0, 0, 0, 8]);
    });

});