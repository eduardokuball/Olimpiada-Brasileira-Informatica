import isMessageValid from "../B.js";

describe("2024 -> Fase 2 -> Alfabeto Alienígena", () => {

    test("Teste 1", () => {
        const result = isMessageValid("!1ob", "ob1!!");
        expect(result).toBe("S");
    });

    test("Teste 2", () => {
        const result = isMessageValid("a", "aabab");
        expect(result).toBe("N");
    });

    test("Teste 3", () => {
        const result = isMessageValid(
            "abcdefghijklmnopqrstuvwxyz",
            "olimpiadabrasileiradeinformatica"
        );
        expect(result).toBe("S");
    });

    test("Teste 4", () => {
        const result = isMessageValid("0123+-!ABCD", "OBI!OBI");
        expect(result).toBe("N");
    });

});