import countVisibleStars from '../E.js';

describe('2010 -> Fase 2 -> Telescópio', () => {

    test('Teste 1', () => {
        const area = 10000;
        const stars = 3;
        const frequencies = [4000, 3500, 5100];

        const result = countVisibleStars(area, stars, frequencies);

        expect(result).toBe(2);
    });

    test('Teste 2', () => {
        const area = 5869;
        const stars = 3;
        const frequencies = [3975, 14234, 8569];

        const result = countVisibleStars(area, stars, frequencies);

        expect(result).toBe(2);
    });

    test('Teste 3', () => {
        const area = 2967;
        const stars = 9;
        const frequencies = [
            18650, 16338, 2400,
            17702, 14619, 13934,
            7979, 16316, 10533
        ];

        const result = countVisibleStars(area, stars, frequencies);

        expect(result).toBe(6);
    });

});