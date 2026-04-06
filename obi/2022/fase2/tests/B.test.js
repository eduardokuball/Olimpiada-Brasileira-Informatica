import generateLayeredSquare from "../B.js";

describe("2022 -> Fase 2 -> Pirâmide", () => {

    test("Teste 1", () => {
        const result = generateLayeredSquare(3);
        expect(result).toEqual([
            [1, 1, 1],
            [1, 2, 1],
            [1, 1, 1]
        ]);
    });

    test("Teste 2", () => {
        const result = generateLayeredSquare(8);
        expect(result).toEqual([
            [1,1,1,1,1,1,1,1],
            [1,2,2,2,2,2,2,1],
            [1,2,3,3,3,3,2,1],
            [1,2,3,4,4,3,2,1],
            [1,2,3,4,4,3,2,1],
            [1,2,3,3,3,3,2,1],
            [1,2,2,2,2,2,2,1],
            [1,1,1,1,1,1,1,1]
        ]);
    });

});