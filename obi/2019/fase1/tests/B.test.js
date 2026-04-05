import findEldestSonAge from "../B.js";

describe("2019 -> Fase 1 -> A idade de dona Mônica", () => {

    test("Teste 1", () => {
        const result = findEldestSonAge(52, 14, 18);
        expect(result).toBe(20);
    });

    test("Teste 2", () => {
        const result = findEldestSonAge(47, 21, 9);
        expect(result).toBe(21);
    });

});