import getStepsUntilFall from '../B.js';

describe("2012 -> Fase 1 -> O Tabuleiro Esburacado", () => {

    test("Teste 1", () => {
        const moves = [1, 8, 5, 3, 4];

        const result = getStepsUntilFall(moves);

        expect(result).toBe(4);
    });

    test("Teste 2", () => {
        const moves = [6, 8, 1];

        const result = getStepsUntilFall(moves);

        expect(result).toBe(3);
    });

});