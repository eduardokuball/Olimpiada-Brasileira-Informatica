import convertToNumber from '../B.js';

describe('2008 -> Fase 1 -> Telefone', () => {

    test('Teste 1', () => {
        const text = '55-98-234-5678';

        const result = convertToNumber(text);

        expect(result).toBe('55-98-234-5678');
    });

    test('Teste 2', () => {
        const text = '0800-FALE-SBC';

        const result = convertToNumber(text);

        expect(result).toBe('0800-3253-722');
    });

    test('Teste 3', () => {
        const text = 'M1S-TU-R4';

        const result = convertToNumber(text);

        expect(result).toBe('617-88-74');
    });

});