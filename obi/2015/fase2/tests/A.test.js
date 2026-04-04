import countConvexHullLower from '../A.js';

describe("2015 -> Fase 2 -> Macacos me mordam", () => {

    test("Teste 1", () => {
        const points = [ { x: 1, y: 3 }, { x: 2, y: 4 }, { x: 3, y: 3 }, { x: 4, y: 1 } ]
        const result = countConvexHullLower(points);

        expect(result).toBe(3);
    });

    test("Teste 2", () => {
        const points = [ { x: 1, y: 3 }, { x: 2, y: 4 }, { x: 3, y: 3 }, { x: 4, y: 2 } ]
        const result = countConvexHullLower(points);

        expect(result).toBe(2);
    });

    test("Teste 3", () => {
        const points = [
                { x: 3, y: 7 },
                { x: 1, y: 3 },
                { x: 5, y: 6 },
                { x: 6, y: 6 },
                { x: 9, y: 6 },
                { x: 8, y: 15 },
                { x: 12, y: 5 },
                { x: 13, y: 1 },
                { x: 10, y: 9 },
                { x: 14, y: 2 }
                ]
        const result = countConvexHullLower(points);

        expect(result).toBe(3);
    });
});