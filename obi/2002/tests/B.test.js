import canDivideEqually from "../B.js";

describe("2002 -> fase única -> Caça ao Tesoura", () => {

    test("Teste 1", () => {
        const objectsValues = [ 3, 8, 7, 2 ];

        const result = canDivideEqually(objectsValues);

        expect(result).toBe("S");
    });

    test("Teste 2", () => {
      const objectsValues = [ 2, 7, 7, 12, 5, 3 ];
      
      const result = canDivideEqually(objectsValues);

    expect(result).toBe("N");

    });
})