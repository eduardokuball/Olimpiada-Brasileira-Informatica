import solve from '../C.js';

describe('2007 -> Fase 1 -> Sacoleiro', () => {

    test('Teste 1', () => {

        const cities = 4;
        const money = 20;

        const cityData = [
            { id: 0, value: 9, sig: 'A', neighbors: [1, 2] },
            { id: 1, value: 8, sig: 'B', neighbors: [1, 2] },
            { id: 2, value: 7, sig: 'A', neighbors: [1, 3] },
            { id: 3, value: 6, sig: 'B', neighbors: [1] }
        ];

        const result = solve(cities, money, cityData);

        expect(result).toBe(1);
    });

    test('Teste 2', () => {
   
        const cities = 3;
        const money = 10;

        const cityData = [
            { id: 0, value: 4, sig: 'A', neighbors: [1] },
            { id: 1, value: 4, sig: 'B', neighbors: [2] },
            { id: 2, value: 2, sig: 'A', neighbors: [] }
        ];

        const result = solve(cities, money, cityData);

        expect(result).toBe(0);
    });

});