import getOlympicPodium from '../A.js';

describe('2009 -> Fase 2 -> Olimpíadas', () => {

    test('Teste 1', () => {
        const countries = 2;
        const modalities = 2;

        const results = [
            [2, 1, 2],
            [1, 2, 2]
        ];

        const result = getOlympicPodium(countries, modalities, results);

        expect(result).toBe('2 1');
    });

    test('Teste 2', () => {
        const countries = 4;
        const modalities = 3;

        const results = [
            [3, 2, 1],
            [4, 3, 1],
            [4, 3, 1]
        ];

        const result = getOlympicPodium(countries, modalities, results);

        expect(result).toBe('4 3 2 1');
    });

    test('Teste 3', () => {
        const countries = 3;
        const modalities = 3;

        const results = [
            [3, 1, 2],
            [2, 3, 1],
            [1, 2, 3]
        ];

        const result = getOlympicPodium(countries, modalities, results);

        expect(result).toBe('1 2 3');
    });

});