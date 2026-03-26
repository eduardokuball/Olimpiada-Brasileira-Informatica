import maximizeSorry from "../D.js";

describe("2005 -> Fase única -> Pedido de Desculpas", () => {

    test("Teste 1", () => {

        const cardLength = 200;
        const phrases = [
                            { length: 100, sorry_occurrences: 4 },
                            { length: 100, sorry_occurrences: 1 },
                            { length: 120, sorry_occurrences: 2 },
                            { length: 80, sorry_occurrences: 5 }
                        ];

        const result = maximizeSorry(cardLength, phrases);

        expect(result).toBe(9);
    });

    test("Teste 2", () => {

        const cardLength = 40;
        const phrases = [
                            { length: 10, sorry_occurrences: 1 },
                            { length: 10, sorry_occurrences: 1 },
                            { length: 20, sorry_occurrences: 2 }
                            ];

        const result = maximizeSorry(cardLength, phrases);

        expect(result).toBe(4);
    })
})