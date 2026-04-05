import calculateTiles from "../A.js";

describe("2018 -> Fase 1 -> Piso da escola", () => {

    test("Teste 1", () => {
        const result = calculateTiles(3, 5);
        expect(result).toEqual([23, 12]);
    });

    test("Teste 2", () => {
        const result = calculateTiles(1, 1);
        expect(result).toEqual([1, 0]);
    });

});