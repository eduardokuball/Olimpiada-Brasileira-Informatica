import getMinimumRouteCost from './A.js';

describe('2009 -> Fase 1 -> Caminho das Pontes', () => {

    test('Teste 1', () => {
        const pillars = 2;
        const bridges = 5;

        const edges = [
            [0, 1, 1],
            [0, 2, 3],
            [0, 3, 9],
            [1, 3, 2],
            [2, 3, 2]
        ];

        const result = getMinimumRouteCost(pillars, bridges, edges);

        expect(result).toBe(3);
    });

    test('Teste 2', () => {
        const pillars = 4;
        const bridges = 9;

        const edges = [
            [0, 1, 1],
            [0, 3, 4],
            [0, 4, 2],
            [1, 2, 5],
            [1, 5, 3],
            [2, 5, 5],
            [3, 4, 2],
            [3, 5, 5],
            [4, 5, 8]
        ];

        const result = getMinimumRouteCost(pillars, bridges, edges);

        expect(result).toBe(4);
    });

});