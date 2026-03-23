import minimumSpanningTree from '../A.js';

describe('2000 -> fase única -> Rede ótica', () => {

    test('Teste 1', () => {
        const tabas = 3;
        const edges = [
            { tabaA: 1, tabaB: 2, cost: 10 },
            { tabaA: 2, tabaB: 3, cost: 10 },
            { tabaA: 3, tabaB: 1, cost: 10 },
        ];

        const result = minimumSpanningTree(tabas, edges);

        expect(result).toEqual([
            [1, 2],
            [1, 3],
        ]);
    });

    test('Teste 2', () => {
        const tabas = 5;
        const edges = [
            { tabaA: 1, tabaB: 2, cost: 15 },
            { tabaA: 1, tabaB: 3, cost: 12 },
            { tabaA: 2, tabaB: 4, cost: 13 },
            { tabaA: 2, tabaB: 5, cost: 5 },
            { tabaA: 3, tabaB: 2, cost: 6 },
            { tabaA: 3, tabaB: 4, cost: 6 }

        ];

        const result = minimumSpanningTree(tabas, edges);
        expect(result).toEqual([
            [1, 3],
            [2, 3],
            [2, 5],
            [3, 4]
        ]);
    });


});