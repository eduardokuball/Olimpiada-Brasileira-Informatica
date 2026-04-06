import canBalanceWeights from "../A.js";

describe("2023 -> Fase 2 -> Pirâmide", () => {

    test("Teste 1", () => {
        const result = canBalanceWeights([6,5,4,14,5,8]);
        expect(result).toBe('S');
    });

    test("Teste 2", () => {
        const result = canBalanceWeights([10,1,1,1,1,1]);
        expect(result).toBe('N');
    });

    test("Teste 3", () => {
        const result = canBalanceWeights([10,30,50,70,80,120]);
        expect(result).toBe('S');
    });

    test("Teste 4", () => {
        const result = canBalanceWeights([4,8,12,24,20,16]);
        expect(result).toBe('N');
    });

});