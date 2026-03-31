import countCoveredArea from '../A.js';

describe('2011 -> Fase 1 -> O mar não está para peixe', () => {

    test('Teste 1', () => {
        const fishingNet = 2;
        const rectangles = [
            [1, 3, 1, 3],
            [2, 4, 2, 4] 
        ];

        const result = countCoveredArea(fishingNet, rectangles);

        expect(result).toBe(7);
    });

    test('Teste 2', () => {
        const fishingNet = 3;
        const rectangles = [ [ 1, 6, 1, 2 ], [ 3, 7, 1, 2 ], [ 2, 5, 1, 2 ] ]

        const result = countCoveredArea(fishingNet, rectangles);

        expect(result).toBe(6); 
    });

    test('Teste 3', () => {
        const fishingNet = 3;
        const rectangles = [
            [0, 1, 0, 1],
            [1, 2, 1, 2],
            [2, 3, 2, 3]
        ];

        const result = countCoveredArea(fishingNet, rectangles);

        expect(result).toBe(3);
    });

});