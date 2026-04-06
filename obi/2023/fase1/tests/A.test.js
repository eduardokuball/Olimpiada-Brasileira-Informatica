import countBillsPaid from "../A.js";

describe("2023 -> Fase 1 -> Contas a pagar", () => {

    test("Teste 1", () => {
        const result = countBillsPaid(100, [30, 40, 30]);
        expect(result).toBe(3);
    });

    test("Teste 2", () => {
        const result = countBillsPaid(50, [82, 99, 51]);
        expect(result).toBe(0);
    });

    test("Teste 3", () => {
        const result = countBillsPaid(200, [180, 100, 120]);
        expect(result).toBe(1);
    });

    test("Teste 4", () => {
        const result = countBillsPaid(200, [100, 180, 90]);
        expect(result).toBe(2);
    });

});