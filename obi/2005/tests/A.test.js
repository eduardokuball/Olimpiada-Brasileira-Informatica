import solveGame from "../A.js";

describe("2005 -> Fase única -> Bafo", () => {

    test("Teste 1", () => {

        const roundsData = [ [ 1, 5 ], [ 2, 3 ] ];

        const result = solveGame(roundsData);

        expect(result).toBe("Beto");
    })

    test("Teste 2", () => {

        const roundsData = [ [ 0, 0 ], [ 4, 7 ], [ 10, 0 ] ];

        const result = solveGame(roundsData);

        expect(result).toBe("Aldo");
    });
})