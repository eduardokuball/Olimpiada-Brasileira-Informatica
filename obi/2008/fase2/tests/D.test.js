import solve from '../D.js';

describe('2008 -> Fase 2 -> Frete da Família Silva', () => {

    test('Teste 1', () => {
        const colonies = 4;
        const roads = 6;

        const edges = [
            [0, 1, 10],
            [0, 2, 5],
            [0, 3, 10],
            [1, 2, 3],
            [1, 3, 4],
            [2, 3, 2]
        ];

        const result = solve(colonies, roads, edges);

        expect(result).toBe(10);
    });

    test('Teste 2', () => {
        const colonies = 4;
        const roads = 6;

        const edges = [
            [0, 1, 1],
            [0, 2, 1],
            [0, 3, 1],
            [1, 2, 3],
            [1, 3, 4],
            [2, 3, 2]
        ];

        const result = solve(colonies, roads, edges);

        expect(result).toBe(3);
    });


});