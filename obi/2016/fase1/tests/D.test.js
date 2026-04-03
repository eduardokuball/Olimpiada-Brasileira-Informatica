import getLowestColumnSum from "../D.js";

describe("2016 -> Fase 1 -> Nova avenida", () => {

    test("Teste 1", () => {
        const matrix = [ [ 5, 3, 12, 4 ], [ 5, 4, 7, 2 ], [ 5, 1, 10, 5 ] ];

        const result = getLowestColumnSum(matrix);

        expect(result).toBe(8); 
    });

    test("Teste 2", () => {
        const matrix = [
            [ 20, 30, 10, 10, 50 ],
            [ 20, 30, 10, 10, 50 ],
            [ 20, 30, 10, 10, 50 ],
            [ 20, 30, 10, 10, 50 ]
            ]

        const result = getLowestColumnSum(matrix);

        expect(result).toBe(40);
    });

    test("Teste 3", () => {
        const matrix = [
            [5]
        ];

        const result = getLowestColumnSum(matrix);

        expect(result).toBe(5);
    });

});