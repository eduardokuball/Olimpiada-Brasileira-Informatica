import validateSequence from '../C.js';

describe("2014 -> Fase 2 -> Blefe", () => {

    test("Teste 1", () => {
        const a = [ 34, 9, -2, 77, -11, 5 ]
        const b = [34,  5, -2, 32, -11,-6, 28, 66, -2, -22,33]

        const result = validateSequence(a, b);

        expect(result).toBe("sim");
    });

    test("Teste 2", () => {
        const a = [ 34, 9, -2, 77, -11, 5 ]
        const b = [-11, 77, -2, 75,9, 48,  7,  5]

        const result = validateSequence(a, b);

        expect(result).toBe(48);
    });

});