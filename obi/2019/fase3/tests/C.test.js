import table from "../C.js"

describe("2019 -> Fase 3 -> Mesa redonda", () => {

    test("Teste 1", () => {

        const [ana,beatriz] = [8,6];

        const result = table(ana, beatriz);

        expect(result).toBe(1);
    });

    test("Teste 2", () => {

        const [ana,beatriz] = [3,9];

        const result = table(ana, beatriz);

        expect(result).toBe(2);
    });

    test("Teste 1", () => {

        const [ana,beatriz] = [1,2];

        const result = table(ana, beatriz);

        expect(result).toBe(0);
    })
})