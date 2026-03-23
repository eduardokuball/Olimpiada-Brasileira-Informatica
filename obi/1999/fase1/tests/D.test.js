import trainOrTruck from '../D.js';

describe('1999 -> Fase 1 -> Trem ou Caminhão?', () => {
    test('Teste 1: Trem', () => {
        const input = [2354, 450, 3.5, 230, 3.7];
        expect(trainOrTruck(...input)).toBe('envie por trem \n ');
    });

    test('Teste 2: Trem', () => {
        const input = [1000, 411.5, 2.85, 411.5, 2.85];
        expect(trainOrTruck(...input)).toBe('envie por trem \n ');
    });

    test('Teste 3: Caminhão', () => {
        const input = [2327, 325, 3.1, 556.5, 3];
        expect(trainOrTruck(...input)).toBe('envie por caminhao \n ');
    });
});
