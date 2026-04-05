import findMinimumNeighborhood from "../D.js";

describe("2020 -> Fase 2 -> Estrada", () => {

    test("Teste 1", () => {
        const result = findMinimumNeighborhood(10, [8, 5]);
        expect(result).toBe(3.50);
    });

    test("Teste 2", () => {
        const result = findMinimumNeighborhood(10, [7, 6, 8]);
        expect(result).toBe(1.00);
    });

});