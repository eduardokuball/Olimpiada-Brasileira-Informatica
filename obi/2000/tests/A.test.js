import minimumSpanningTree from '../A.js';

describe('2000 -> fase única -> Rede ótica', () => {

    test('Teste 1', () => {
        const lines = [ '3 3', '1 2 10', '2 3 10', '3 1 10' ]

        const result = minimumSpanningTree(lines);

        expect(result).toEqual([
            [1, 2],
            [1, 3],
        ]);
    });

    test('Teste 2', () => {
        const lines = [
            '5 6',    '1 2 15',
            '1 3 12', '2 4 13',
            '2 5 5',  '3 2 6',
            '3 4 6'
    ]

        const result = minimumSpanningTree(lines);
        expect(result).toEqual([
            [1, 3],
            [2, 3],
            [2, 5],
            [3, 4]
        ]);
    });


});