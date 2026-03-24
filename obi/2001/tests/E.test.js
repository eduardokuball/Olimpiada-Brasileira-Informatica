import calculate from "../E";

describe("2001 -> Fase única -> calculando", () => {

    test("Teste 1", () => {
        const expressao = [ '3', '+', '7', '-', '2', '2' ];

        const result = calculate(expressao)

        expect(result).toBe(-12)
    });

    test("Teste 2", () => {
        const expressao = [
                    '5', '-', '1',
                    '0', '-', '7',
                        '7'
        ]

        const result = calculate(expressao)

        expect(result).toBe(-82);

    })

    test("Teste 3", () => {
        const expressao = [
    '1', '+', '2', '+', '3',
    '+', '4', '+', '5', '+',
    '6', '+', '7', '+', '8',
    '+', '9', '+', '1', '0'
    ]

    const result = calculate(expressao);

    expect(result).toBe(55);
    })
})