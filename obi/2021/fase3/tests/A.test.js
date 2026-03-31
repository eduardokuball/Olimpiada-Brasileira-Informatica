import hands from "../A.js";

describe("2021 -> Fase 3 -> Ogro", () => {

    test("Teste 1", () => {

        const numbers = 8;

        const result = hands(numbers);

        expect(result).toEqual([ 'IIIII', 'III' ]);

    });

    test("Teste 2", () => {

        const numbers = 3;

        const result = hands(numbers);

        expect(result).toEqual([ 'III', '*' ]);
    })

    test("Teste 3", () => {

        const numbers = 0;

        const result = hands(numbers);

        expect(result).toEqual([ '*', '*' ]);
    })
});