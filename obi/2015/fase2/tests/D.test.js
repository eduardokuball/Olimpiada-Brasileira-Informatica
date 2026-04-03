import sumBinaryArrays from '../D.js';

describe("2015 -> Fase 2 -> Cálculo", () => {

    test("Teste 1", () => {
        const result = sumBinaryArrays(2, 3, [0, 1], [0, 0, 1]);
        expect(result).toEqual([0,1,1]);
    });

    test("Teste 2", () => {
        const result = sumBinaryArrays(5, 4, [1 ,0 ,1 ,1 ,1], [0 ,0 ,0 ,1]);
        expect(result).toEqual([1 ,1 ,0 ,0 ,1]);
    });

    test("Teste 3", () => {
        const result = sumBinaryArrays(4, 5, [0 ,1 ,1 ,1], [0 ,0 ,1 ,1, 1]);
        expect(result).toEqual([1 ,0 ,1 ,0 ,1]);
    });

});