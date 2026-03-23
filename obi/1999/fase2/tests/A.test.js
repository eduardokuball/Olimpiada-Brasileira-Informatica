import calculateRotations from '../A.js';

describe('1999 -> Fase 2 -> RoboCoffee', () => {

    test('Teste 1', () => {
        const points = [
            { x: 1, y: 1 },
            { x: 1, y: 0 },
            { x: 0, y: 0 },
            { x: 0, y: 1 }
        ];

        expect(calculateRotations(points)).toBe(1);
    });
    
    test('Teste 2', () => {
        const points = [
            { x: 2, y: -3 },
            { x: 2, y: 2 },
            { x: -3, y: 3 },
            { x: -2, y: -1 }
        ];

        expect(calculateRotations(points)).toBe(3);
    });

    test('Teste 3', () => {
        const points = [
            { x: 0, y: 0 },
            { x: 1, y: 0 },
            { x: 2, y: 0 }
        ];

        expect(calculateRotations(points)).toBe(0);
    });

    test('Teste 4', () => {
        const points = [
            { x: 0, y: 0 },
            { x: 1, y: 0 },
            { x: 0, y: 1 }
        ];

        expect(calculateRotations(points)).toBeGreaterThanOrEqual(0);
    });

});