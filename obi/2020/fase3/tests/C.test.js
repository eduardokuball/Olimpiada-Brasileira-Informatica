import calculateInfluenceIndex from "../C.js";

describe("2020 -> Fase 2 -> Rede Social", () => {

    test("Teste 1", () => {
        const result = calculateInfluenceIndex([1, 4, 1, 7, 1]);
        expect(result).toBe(2);
    });

    test("Teste 2", () => {
        const result = calculateInfluenceIndex([12, 5, 3, 5, 15]);
        expect(result).toBe(4);
    });

    test("Teste 3", () => {
        const result = calculateInfluenceIndex([3, 3, 3, 3]);
        expect(result).toBe(3);
    });

});