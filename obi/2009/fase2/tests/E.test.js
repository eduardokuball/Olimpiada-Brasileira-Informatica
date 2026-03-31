import getWinner from '../E.js';

describe('2009 -> Fase 2 -> Competição de chocolate', () => {

    test('Teste 1', () => {
        const chocoball = 5;
        const maximum = 3;

        const result = getWinner(chocoball, maximum);

        expect(result).toBe('Paula');
    });

    test('Teste 2', () => {
        const chocoball = 20;
        const maximum = 5;

        const result = getWinner(chocoball, maximum);

        expect(result).toBe('Carlos');
    });

    test('Teste 3', () => {
        const chocoball = 5;
        const maximum = 6;

        const result = getWinner(chocoball, maximum);

        expect(result).toBe("Paula"); 
    });

});
