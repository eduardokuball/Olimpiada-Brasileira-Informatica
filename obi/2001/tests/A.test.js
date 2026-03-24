import isInGround from "../A";

describe("2001 -> Fase única -> Meteoros", () => {

    test("Teste 1", () => {
        const points = [ [ 1, 2 ], [ 3, 3 ] ]
        const [x1,y1,x2,y2] = [ 2, 4, 5, 1 ]

        const result = isInGround(points, x1,y1,x2,y2)

        expect(result).toBe(1);
    });

     test("Teste 2", () => {
        const points = [ [ 1, 1 ], [ 2, 2 ], [ 3, 3 ] ]
        const [x1,y1,x2,y2] = [ 2, 4, 3, 2 ]

        const result = isInGround(points, x1,y1,x2,y2)

        expect(result).toBe(2);
    });
    
})