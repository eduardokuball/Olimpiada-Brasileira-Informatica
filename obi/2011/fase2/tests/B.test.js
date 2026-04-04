import validateBracketsSequences from '../B.js';

describe("OBI -> Validação de Parênteses", () => {

    test("Teste 1", () => {
        const input = [
            "()",
            "[]",
            "{}",
            "(]",
            "}{",
            "([{}])",
            "{}()[]",
            "(]",
            "()",
            "{[]",
            "(({}()[]))(){}",
            "(((((((((((())))))))))))"
        ];

        const result = validateBracketsSequences(input);

        expect(result).toEqual([
            'S',
            'S',
            'S',
            'N',
            'N',
            'S',
            'S',
            'N',
            'S',
            'N',
            'S',
            'S'
        ]);
    });

});