import getMoves from "../C.js";

describe("2003 -> fase única -> Torres de Hanói", () => {

    test("Teste 1", () => {

        const disks = 1;

        const result = getMoves(disks);

        expect(result).toBe(1);
    });

    test("Teste 2", () => {

        const disks = 2;

        const result = getMoves(disks);

        expect(result).toBe(3);
    })
})