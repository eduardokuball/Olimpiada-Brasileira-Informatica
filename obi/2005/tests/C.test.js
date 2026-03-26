import solveGame from "../C.js";

describe("2005 -> Fase única -> Vivo ou Morto", () => {

    test("Teste 1", () => {

        const rounds = 2;
        const players = [ 2, 1 ];
        const roundsData = [ [ 2, 1, 1, 1 ], [ 2, 1, 1, 0 ] ];

        const result = solveGame(rounds, players, roundsData);

        expect(result).toBe("2");
    });

    test("Teste 2", () => {

        const rounds = 4;
        const players = [ 3, 2, 1, 4, 5 ];
        const roundsData = [
                            [5, 1, 1, 1,1, 1, 1],
                            [5, 0, 0, 1,0, 1, 0],
                            [ 3, 0, 0, 1, 0 ],
                            [ 2, 1, 0, 1 ]];
                        
        const result = solveGame(rounds, players, roundsData);

        expect(result).toBe("5");
    
    })
})