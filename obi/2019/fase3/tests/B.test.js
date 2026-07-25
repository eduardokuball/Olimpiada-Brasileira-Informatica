import subway from '../B.js'

describe('2019 -> Fase 3 -> Metrõ da Nlogônia', () => {
    test('Teste 1', () => {
        const circleEdges = [ [1, 3], [3, 2], [3, 4], [4, 5], [5, 7], [6, 5] ];
        const squareEdges = [ [1, 3], [2, 3], [3, 4], [3, 5], [5, 6] ];

        const result = subway(circleEdges, squareEdges);
        const valid = [[4, 3], [4, 5]];
        expect(valid).toContainEqual(result);
    });

    test('Teste 2', () => {
        const circleEdges = [ [1, 2], [2, 3] ];
        const squareEdges = [ [1, 2], [2, 3], [3, 4] ];

        const result = subway(circleEdges, squareEdges);
        const valid = [[2, 2], [2, 3]];
        expect(valid).toContainEqual(result);
    });
});
