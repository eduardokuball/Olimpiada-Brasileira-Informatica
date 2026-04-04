import evaluateHand from "../E.js";

describe("2005 -> Fase única -> Mini-Poker", () => {

    test("Teste 1", () => {

        const cards = [12, 3, 10, 3, 12];
        
        const result = evaluateHand(cards);

        expect(result).toBe(62);
    });

    test("Teste 2", () => {

        const cards = [1,2,3,5,4];

        const result = evaluateHand(cards);

        expect(result).toBe(201);
    })

})