import getMaxArea from '../B.js';

describe("2014 -> Fase 2 -> Tapetes", () => {

    test("Teste 1", () => {
        const result = getMaxArea(2, 2);
        expect(result).toBe(2); 
    });

    test("Teste 2", () => {
        const result = getMaxArea(10, 5);
        expect(result).toBe(40);
    });

    test("Teste 3", () => {
        const result = getMaxArea(1000000, 9);
        expect(result).toBe(999984000072); 
    });

});