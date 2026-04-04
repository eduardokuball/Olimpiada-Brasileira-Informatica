import assembleFinalWord from '../B.js';

describe("2015 -> Fase 1 -> Quebra-cabeça", () => {

    test("Teste 1", () => {
        const quantity = 4;

        const pieces = [ [ 5, 'A', 1 ], [ 0, 'T', 7 ], [ 3, 'M', 5 ], [ 7, 'E', 3 ] ]

        const result = assembleFinalWord(quantity, pieces);

        expect(result).toBe("TEMA");
    });

    test("Teste 2", () => {
        const quantity = 3;

        const pieces = [ [ 197452, 'I', 1 ], [ 0, 'O', 39999 ], [ 39999, 'B', 197452 ] ]

        const result = assembleFinalWord(quantity, pieces);

        expect(result).toBe("OBI");
    });

});