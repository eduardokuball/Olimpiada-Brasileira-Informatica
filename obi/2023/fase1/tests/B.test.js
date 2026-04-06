import countSuccessfulOrders from "../B.js";

describe("2023 -> Fase 1 -> Estoque", () => {

    test("Teste 1", () => {
        const stock = [
            [5, 2, 2],
            [6, 4, 0],
            [2, 1, 4],
            [1, 3, 2]
        ];

        const orders = [
            [1, 1],
            [2, 3]
        ];

        const result = countSuccessfulOrders(stock, orders);
        expect(result).toBe(1);
    });

    test("Teste 2", () => {
        const stock = [
            [1, 3, 2, 5]
        ];

        const orders = [
            [1, 3],
            [1, 3],
            [1, 3],
            [1, 4]
        ];

        const result = countSuccessfulOrders(stock, orders);
        expect(result).toBe(3);
    });

});