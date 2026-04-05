import determineWinner from "../A.js";

describe("2017 -> Fase 2 -> Dario e Xerxes", () => {

    test("Teste 1", () => {
        const rounds = [
            [1, 3],
            [4, 2],
            [0, 2]
        ];

        const result = determineWinner(rounds);
        expect(result).toBe("dario");
    });

    test("Teste 2", () => {
        const rounds = [
            [3, 1],
        ];

        const result = determineWinner(rounds);
        expect(result).toBe("xerxes");
    });


});