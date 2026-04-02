import calculateMinimumMoves from '../D.js';

describe("2014 -> Fase 1 -> Fechadura", () => {

    test("Teste 1", () => {
        const pins = [45, 45, 55, 55];
        const height = 50;

        const result = calculateMinimumMoves(pins, height);

        expect(result).toBe(10);
    });

    test("Teste 2", () => {
        const pins = [84, 39, 17, 72, 94];
        const height = 84;

        const result = calculateMinimumMoves(pins, height);

        expect(result).toBe(77);
    });

});