import findRectangleDimensions from "../A.js";

describe("2020 -> Fase 3 -> Atlanta", () => {

    test("Teste 1", () => {
        const result = findRectangleDimensions(10, 2);
        expect(result).toEqual([3, 4]);
    });

    test("Teste 2", () => {
        const result = findRectangleDimensions(8, 2);
        expect(result).toEqual([-1, -1]);
    });

    test("Teste 3", () => {
        const result = findRectangleDimensions(3996, 996004);
        expect(result).toEqual([1000, 1000]);
    });

});