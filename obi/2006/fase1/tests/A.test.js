import gameResult from "../A.js";

describe("2006 -> Fase 1 -> Truco", () => {

    test("Teste 1", () => {

        const roundsData = [ [ 1, 2, 3, 1, 3, 2 ] ];

        const result = gameResult(roundsData);

        expect(result).toEqual([1,0]);
    });

    test("Teste 2", () => {

        const roundsData = [ [ 1, 5, 6, 6, 3, 4 ], [ 5, 6, 2, 11, 13, 12 ] ];

        const result = gameResult(roundsData);

        expect(result).toEqual([1,1]);

    });

    test("Teste 3", () => {

        const roundsData = [[ 1, 2, 11, 12, 7, 6 ],
                            [ 3, 5, 1, 13, 1, 4 ],
                            [ 4, 5, 7, 11, 12, 13 ],
                            [ 1, 5, 6, 3, 5, 2 ],
                            [ 5, 6, 7, 4, 5, 2 ]
                        ];

        const result = gameResult(roundsData);

        expect(result).toEqual([3,2]);
    })

} )