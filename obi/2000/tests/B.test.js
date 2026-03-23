import draw  from "../B";

describe('2000 -> fase única -> Quermesse', () => {

    test('Teste 1', () => {
       const fistcome = [4,5,3,1];

       const result = draw(fistcome);

       expect(result).toBe(3);
    });

     test('Teste 2', () => {
       const fistcome = [9, 8, 7, 6, 1, 4, 3, 2, 12, 10];

       const result = draw(fistcome);

       expect(result).toBe(10);
    });


});