import getPlateType from "../C.js";

describe("2024 -> Fase 1 -> Placas de Carro", () => {

    test("Teste 1", () => {
        const result = getPlateType("OBI-2024");
        expect(result).toBe(1);
    });

    test("Teste 2", () => {
        const result = getPlateType("OBI2P24");
        expect(result).toBe(2);
    });

    test("Teste 3", () => {
        const result = getPlateType("OBI-24");
        expect(result).toBe(0);
    });

    test("Teste 4", () => {
        const result = getPlateType("XYZ-1234");
        expect(result).toBe(1);
    });

    test("Teste 5", () => {
        const result = getPlateType("A1B2C3D4E5");
        expect(result).toBe(0);
    });

});