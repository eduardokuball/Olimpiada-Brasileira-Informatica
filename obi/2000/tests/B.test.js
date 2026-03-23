import draw  from "../B.js";

describe('2000 -> fase única -> Quermesse', () => {

    test('Teste 1', () => {
       const fistcome = "4 5 3 1";
       const guests = 4

       const result = draw(guests, fistcome);

       expect(result).toBe(3);
    });

     test('Teste 2', () => {
       const fistcome = "9 8 7 6 1 4 3 2 12 10";
       const guests = 10;

       const result = draw(guests,fistcome);

       expect(result).toBe(10);
    });


});