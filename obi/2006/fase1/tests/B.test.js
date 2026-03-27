import maxCajuSum from "../B.js";

describe("2006 -> Fase 1 -> Colheita de Caju", () => {

    test("Teste 1", () => {

        const matrix = [ [ 1, 2, 3 ], 
                        [ 1, 3, 3 ], 
                        [ 1, 10, 1 ] 
                    ]

        const submatrixX = 1;
        const submatrixY = 1;

        const result = maxCajuSum(matrix, submatrixX, submatrixY);

        expect(result).toBe(10);
    });

    test("Teste 2", () => {

        const matrix = [ [ 1, 2, 3, 4 ], 
                          [ 5, 6, 7, 8 ], 
                          [ 1, 10, 5, 2 ], 
                          [ 1, 5, 9, 10 ] 
                        ]

        const submatrixX = 2;
        const submatrixY = 1;

        const result = maxCajuSum(matrix, submatrixX, submatrixY);

        expect(result).toBe(16);
    });

    test("Teste 3", () => {

        const matrix = [
                        [ 1, 1, 1, 3, 1 ],
                        [ 1, 2, 1, 1, 1 ],
                        [ 1, 1, 1, 2, 1 ],
                        [ 1, 1, 2, 1, 1 ],
                        [ 1, 3, 1, 1, 3 ]
                       ]

        const submatrixX = 2;
        const submatrixY = 2;

        const result = maxCajuSum(matrix, submatrixX, submatrixY);

        expect(result).toBe(7);
    })
})