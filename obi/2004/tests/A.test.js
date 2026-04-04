import determineWinners from "../A.js";

describe("2004 -> Fase única -> Par ou ímpar", () => {

    test("Teste 1", () => {
        const rounds = 3;
        const player1 = "Pedro";
        const player2 = "Paulo";
        const plays = [
            [2, 4],
            [3, 5],
            [1, 0]
        ];

        const result = determineWinners(rounds, player1, player2, plays);
        expect(result).toEqual(["Pedro", "Pedro", "Paulo"]);
    });

    test("Teste 2", () => {
        const rounds = 2;
        const player1 = "Claudio";
        const player2 = "Carlos";
        const plays = [
            [1, 5],
            [2, 3]
        ];

        const result = determineWinners(rounds, player1, player2, plays);

        expect(result).toEqual(["Claudio", "Carlos"]);
    })
});