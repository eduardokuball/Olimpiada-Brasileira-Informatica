import canFormGame from "../B";

describe("2001 -> Fase única -> Dominó", () => {

    test("Teste 1", () => {
        const pieces = [ '21', '21' ];
        const game = [ '01' ];

        const result = canFormGame(pieces, game);

        expect(result).toBe("sim");
    });

     test("Teste 2", () => {
        const pieces = [ '00' ]
        const game = [ '11' ];

        const result = canFormGame(pieces, game);

        expect(result).toBe("nao");
    });

    test("Teste 3", () => {
        const pieces = [ '00', '16', '41', '06', '23' ]
        const game = [ '30' ];

        const result = canFormGame(pieces, game);

        expect(result).toBe("sim");
    });

})