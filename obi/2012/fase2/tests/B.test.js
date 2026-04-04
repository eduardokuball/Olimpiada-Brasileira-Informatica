import findHousesWithSum from '../B.js';

describe("2012 -> Fase 2 -> Soma das Casas", () => {

    test("Teste 1", () => {
        const numbers = [1, 4, 5, 3, 2];
        const result = findHousesWithSum(numbers, 7);

        expect(result).toEqual([3, 4]);
    });

    test("Teste 2", () => {
        const numbers = [10, 20, 30];
        const result = findHousesWithSum(numbers, 50);

        expect(result).toEqual([20, 30]);
    });

});