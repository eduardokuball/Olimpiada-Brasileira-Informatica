import juneCelebration from '../A.js';

describe("2025 -> Fase 1 -> Festa Junina", () => {

    test("Teste 1", () => {

        const result = juneCelebration(10,5,13);

        expect(result).toBe(16);
    })

    test("Teste 2", () => {

        const result = juneCelebration(4,25,17);

        expect(result).toBe(42);
    })

    test("Teste 3", () => {

        const result = juneCelebration(1000,0,500);

        expect(result).toBe(2000);
    })
})