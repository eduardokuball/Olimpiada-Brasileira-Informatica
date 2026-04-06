import calculateAnswerTimes from "../C.js";

describe("2021 -> Fase 1 -> Tempo de Resposta", () => {

    test("Teste 1", () => {
        const result = calculateAnswerTimes([
            ["R", 2],
            ["R", 3],
            ["T", 5],
            ["E", 2],
            ["E", 3],
        ]);

        expect(result).toEqual([
            "2 6",
            "3 6"
        ]);
    });

    test("Teste 2", () => {
        const result = calculateAnswerTimes([
            ["R", 12],
            ["T", 2],
            ["R", 23],
            ["T", 3],
            ["R", 45],
            ["E", 45],
            ["R", 45],
            ["E", 23],
            ["R", 23],
            ["T", 2],
            ["E", 23],
            ["R", 34],
            ["E", 12],
            ["E", 34],
        ]);

        expect(result).toEqual([
            "12 13",
            "23 8",
            "34 2",
            "45 -1"
        ]);
    });

});