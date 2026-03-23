import bills  from "../C.js";

describe('2000 -> fase única -> Bits Trocados', () => {

    test('Teste 1', () => {
       const bits = 1

       const result = bills(bits);

       expect(result).toBe("0 0 0 1");
    });

      test('Teste 1', () => {
       const bits = 72

       const result = bills(bits);

       expect(result).toBe("1 2 0 2");
    });

});