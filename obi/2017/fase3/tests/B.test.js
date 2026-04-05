import classifyHeights from "../B.js";

describe("2017 -> Fase 3 -> Postes", () => {

    test("Teste 1", () => {
        const result = classifyHeights([85, 49, 50, 84, 50]);
        expect(result).toEqual([1, 3]);
    });

    test("Teste 2", () => {
        const result = classifyHeights([48, 49, 30, 47]);
        expect(result).toEqual([4, 0]);
    });

});