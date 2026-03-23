import findIntersection from "../E";

describe("2000 -> fase única -> Macaco-prego",() => {
    
    test("Teste 1",() => {
        const regions = [ '0 4 4 0', '3 1 7 -3', '6 4 10 0' ];

        const result = findIntersection(regions);

        expect(result).toBe("nenhum");
    });

    test("Teste 2",() => {

        const regions = [ '0 6 8 1', '1 5 6 3', '2 4 9 0' ];

        const result = findIntersection(regions);

        expect(result).toBe("2 4 6 3");

    })
})