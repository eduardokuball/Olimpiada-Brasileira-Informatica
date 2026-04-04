import solve from "../B.js";

describe("2008 -> Fase 2 -> Chuva", () => {

    test("Teste 1", () => {

        const [xi, yi, xf, yf] = [0,0,4,3];
        const areasData = [];

        const result = solve(xi, yi, xf, yf,areasData);

        expect(result).toBe(7);
    });

    test("Teste 2", () => {

        const [xi, yi, xf, yf] = [2,5,5,0];
        const areasData = [
            [0,0,1,5]
        ];

        const result = solve(xi, yi, xf, yf,areasData);

        expect(result).toBe(5);
    });

    test("Teste 3", () => {

        const [xi, yi, xf, yf] = [4,5,5,0];
        const areasData = [
            [0,0,1,5],
            [0,0,3,2]
        ];

        const result = solve(xi, yi, xf, yf,areasData);

        expect(result).toBe(5);
    })
})