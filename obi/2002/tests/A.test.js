import temperatureAnalysis from "../A.js";

describe("2002 -> fase única -> Temperatura Lunar", () => {

    test("Teste 1", () => {
        const interval = 2;
        const temperatures = [ -5, -12, 0, 6 ];

        const result = temperatureAnalysis(interval, temperatures);

        expect(result).toBe("-8 3");
    });

    test("Teste 2", () => {
        const interval = 4;
        const temperatures = [35, -35,  5, 100,100,  50, 50];

        const result = temperatureAnalysis(interval, temperatures);

        expect(result).toBe("26 75");

    });
})