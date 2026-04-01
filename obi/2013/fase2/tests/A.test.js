import calculateTotalCost from '../A.js';

describe("2013 -> Fase 2 -> Janela", () => {

    test("Teste 1", () => {
        const result = calculateTotalCost([0 ,200 ,400]);
        expect(result).toBe(0);
    });

    test("Teste 2", () => {
        const result = calculateTotalCost([0 ,50 ,350]);
        expect(result).toBe(15000);
    });

    test("Teste 3", () => {
        const result = calculateTotalCost([344 ,344 ,344]);
        expect(result).toBe(40000);
    });

});