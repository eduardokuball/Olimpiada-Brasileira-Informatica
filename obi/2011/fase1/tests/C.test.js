import getMaxDistance from '../C.js';

describe('2011 -> Fase 1 -> Desafio cartográfico', () => {

    test('Teste 1', () => {
        const cities = 10;
        const edges = [
                [ 1, 2 ],  [ 2, 3 ],
                [ 3, 4 ],  [ 4, 5 ],
                [ 5, 6 ],  [ 6, 7 ],
                [ 7, 8 ],  [ 8, 9 ],
                [ 9, 10 ]
                ]

        const result = getMaxDistance(cities, edges);

        expect(result).toBe(9);
    });

    test('Teste 2', () => {
        const cities = 5;
        const edges = [ [ 1, 2 ], [ 2, 3 ], [ 3, 4 ], [ 3, 5 ] ]

        const result = getMaxDistance(cities, edges);

        expect(result).toBe(3);
    });

    test('Teste 3', () => {
        const cities = 5;
        const edges = [
            [1, 2],
            [1, 3],
            [2, 4],
            [2, 5]
        ];

        const result = getMaxDistance(cities, edges);

        expect(result).toBe(2);
    });

});