import game from '../D.js';

describe('2006 -> Fase 1 -> Jogo de Cartas', () => {

    test('Teste 1', () => {

        const quantity = 3;
        const cards = [2, 1, 3];

        
        const result = game(cards, quantity);

        expect(result).toBe(2);
    });

    test('Teste 2', () => {

        const quantity = 5;
        const cards = [3, 5, 1, 4, 2];

        
        const result = game(cards, quantity);
        expect(result).toBe(3);
    });

    test('Teste 3', () => {

        const quantity = 7;
        const cards = [3, 6, 7, 1, 5, 4, 2];

        const result = game(cards, quantity);
        expect(result).toBe(4);
    });

});