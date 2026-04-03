import calculateRotation from "../E.js";

describe("2016 -> Fase 1 -> Direção", () => {

    test("Teste 1", () => {
        const result = calculateRotation(['norte', 'sul']);
        expect(result).toBe(180);
    });

    test("Teste 2", () => {
        const result = calculateRotation(['leste', 'oeste']);
        expect(result).toBe(180);
    });

    test("Teste 3", () => {
        const result = calculateRotation(['norte', 'norte']);
        expect(result).toBe(0);
    });

    test("Teste 4", () => {
        const result = calculateRotation(['norte', 'leste']);
        expect(result).toBe(90);
    });

});