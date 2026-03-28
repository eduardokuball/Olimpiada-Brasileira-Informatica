import maxPizza from '../B.js';

describe('2007 -> Fase 1 -> Pizza', () => {

    test('Teste 1', () => {
        const slices = [5 ,-3 ,-3 ,2 ,-1 ,3];

        const result = maxPizza(slices);

        expect(result).toBe(9);
    });

    test('Teste 2', () => {
        const slices = [1 ,-2 ,2 ,-1 ,4 ,1 ,-5];

        const result = maxPizza(slices);

        expect(result).toBe(6);
    });

    test('Teste 3', () => {
        const slices = [-3 ,-10];

        const result = maxPizza(slices);

        expect(result).toBe(0); 
    });

});