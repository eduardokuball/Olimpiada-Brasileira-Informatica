import tournament from '../D.js'

describe('2013 -> Fase 2 -> Torneio', () => {
    test('Teste 1', () => {
        const players = [3, 4, 2, 1];
        const k = 2;
        expect(tournament(players, k)).toBe(16);
    });

    test('Teste 2', () => {
        const players = [7, 5];
        const k = 2;
        expect(tournament(players, k)).toBe(2);
    });
});
