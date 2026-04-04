import calculateCount from '../D.js';

describe("2015 -> Fase 1 -> Caixinha de palitos", () => {

    test("Teste 1", () => {
        const result = calculateCount(100, 34);
        expect(result).toBe(6);
    });

    test("Teste 2", () => {
        const result = calculateCount(100, 15);
        expect(result).toBe(0);
    });

    test("Teste 3", () => {
        const result = calculateCount(100000 , 98765);
        expect(result).toBe(4997567718);
    });

});