import computer from '../D.js';

describe('2019 -> Fase 3 -> Computador', () => {
    test('Teste 1', () => {
        const N = 16;
        const instructions = [
            [1, 4, 8],
            [2, 16, 3],
            [3, 14],
            [2, 2, 12],
            [1, 8, 7],
            [3, 10],
            [3, 14]
        ];

        const result = computer(N, instructions);
        expect(result).toEqual([1, 7, 2]);
    });

    test('Teste 2', () => {
        const N = 200000;
        const instructions = [
            [1, 2345, 193290],
            [3, 112230]
        ];
        const result = computer(N, instructions);

        expect(result).toEqual([83405]);
    });
});
