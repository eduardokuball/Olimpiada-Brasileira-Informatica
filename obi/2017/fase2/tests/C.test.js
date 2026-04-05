import countSegments from "../C.js";

describe("2017 -> Fase 2 -> Cortando o Papel", () => {

    test("Teste 1", () => {
        const result = countSegments([20 ,5 ,10 ,5 ,15 ,15 ,15 ,5 ,6 ,22]);
        expect(result).toBe(5);
    });

    test("Teste 2", () => {
        const result = countSegments([10 ,20 ,30 ,40 ,50]);
        expect(result).toBe(2);
    });


});