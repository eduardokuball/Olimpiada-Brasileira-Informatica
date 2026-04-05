import calculateMinimumCost from "../A.js";

describe("2017 -> Fase 3 -> Carrinho", () => {

    test("Teste 1", () => {
        const result = calculateMinimumCost(
            [0.000, 1.200, 3.000, 7.700],
            [1.000, 0.100, 10.000, 1.000],
            10.000
        );

        expect(result).toBe(13.900);
    });

});