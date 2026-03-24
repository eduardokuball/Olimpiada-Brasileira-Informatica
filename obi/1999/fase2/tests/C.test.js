import simulateGame from '../C.js';


describe('1999 -> Fase 2 -> Jogo de Búzios', () => {


    test('Teste 1', () => {
        const result = simulateGame(3, 3);


        expect(result.turns).toBe(2);
        expect(result.winner).toBe(3);
    });


    test('Teste 2', () => {
        const result = simulateGame(5, 3);


        expect(result.turns).toBe(10);
        expect(result.winner).toBe(5);
    });


});
