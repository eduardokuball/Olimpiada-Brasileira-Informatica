import isValidConfiguration from "../C.js";

describe("2016 -> Fase 2 -> Jardim de infância", () => {

    test("Teste 1", () => {
        const points = [
            [2, -4], 
            [5, 3],
            [-1, 3], 
            [3, 3],
            [1, 3], 
            [3, 5],
            [1, 5]
        ]

        const result = isValidConfiguration(points);
        expect(result).toBe("S");
    });

    test("Teste 2", () => {
        const points = [
            [2, -1],
            [5, 45],
            [-43, 9],
            [-11, 33],
            [-27, 21],
            [-20, 45],
            [-36, 33]
        ]

        const result = isValidConfiguration(points);
        expect(result).toBe("S");
    });

      test("Teste 3", () => {
          const points = [
              [2, 4],
              [18, 22],
              [-14, 22],
              [6, 24],
              [-2, 20],
              [6, 26],
              [-2, 22]
          ]

        const result = isValidConfiguration(points);
        expect(result).toBe("N");
    });

    
      test("Teste 4", () => {
          const points = [
              [-1, -3],
              [11, -23],
              [11, 17],
              [11, -7],
              [11, 1],
              [19, -7],
              [19, 1]
          ]

        const result = isValidConfiguration(points);
        expect(result).toBe("N");
    });

    test("Teste 5", () => {
        const points = [
            [4, 1],
            [-36, -4],
            [-12, -36],
            [-30, -12],
            [-18, -28],
            [-39, -25],
            [-27, -41]
        ]

        const result = isValidConfiguration(points);
        expect(result).toBe("N");
    });

});