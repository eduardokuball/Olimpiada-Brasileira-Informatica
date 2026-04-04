import isStairMatrix from '../E.js';

describe("2014 -> Fase 2 -> Matriz escada", () => {

    test("Teste 1", () => {
        const matrix = [
  [ 1, 2, 9, 9, 9, 9 ],
  [ 0, 0, 3, 9, 9, 9 ],
  [ 0, 0, 0, 0, 5, 9 ],
  [ 0, 0, 0, 0, 0, 6 ]
]

        const result = isStairMatrix(matrix);

        expect(result).toBe("S");
    });

    test("Teste 2", () => {
        const matrix = [[0, 5, 1, 0,3, 2, 2, 0],
                        [0, 0, 0, 0,4, 0, 1, 2],
                        [0, 0, 0, 0,0, 0, 3, 2],
                        [ 0, 0, 0, 0,0, 0, 0, 0],
                        [0, 0, 0, 0,0, 0, 0, 0 ]
        ]

        const result = isStairMatrix(matrix);

        expect(result).toBe("S");
    });

    test("Teste 3", () => {
        const matrix = [
                    [ 1, 1, 2, 3, 4 ],
                    [ 0, 1, 1, 4, 5 ],
                    [ 0, 1, 2, 3, 6 ],
                    [ 0, 0, 0, 2, 0 ],
                    [ 0, 0, 0, 0, 0 ]
                    ]

        const result = isStairMatrix(matrix);

        expect(result).toBe("N");
    });

});