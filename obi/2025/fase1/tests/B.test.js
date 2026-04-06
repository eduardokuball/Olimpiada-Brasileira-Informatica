import choffeShop from "../B.js";

describe("OBI 2025 -> Fase 1 -> Cafeteria", () => {

    test("Teste 1", () => {
        const result = choffeShop(130, 150, 200, 30);
        expect(result).toBe(true); 
    });

    test("Teste 2", () => {
        const result = choffeShop(200, 210, 250, 30);
        expect(result).toBe(false); 
    });

    test("Teste 3", () => {
        const result = choffeShop(120, 120, 295, 35);
        expect(result).toBe(true); 
    });

    test("Teste 4", () => {
        const result = choffeShop(0, 10, 500, 90);
        expect(result).toBe(false); 
    });

});