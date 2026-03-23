import calculateRotations from '../A.js';

describe('1999 -> Fase 2 -> RoboCoffee', () => {

    test('Teste 1', () => {
        const lines = [ '4', '1 1', '1 0', '0 0', '0 1' ]

        expect(calculateRotations(lines)).toBe(1);
    });
    
    test('Teste 2', () => {
        const lines = [ '4', '2 -3', '2 2', '-3 3', '-2 -1' ]

        expect(calculateRotations(lines)).toBe(3);
    });


});