import images from '../B.js';

describe('1999 -> Fase 1 -> Imagens de Satélite', () => {
    test('Teste 1: 2x2 Image', () => {
        const image = [
            [0, 0],
            [0, 0]
        ];
        expect(images(image)).toBe(0);
    });

    test('Teste 2: 9x15 Image', () => {
        const image = [
            '000000000000000',
            '007677888000080',
            '008000000900000',
            '006003300080000',
            '005003300800000',
            '004000009000600',
            '034556780005000',
            '300000000004400',
            '020000000000000'
        ].map(l => l.split('').map(Number));
        expect(images(image)).toBe(4);
    });
});