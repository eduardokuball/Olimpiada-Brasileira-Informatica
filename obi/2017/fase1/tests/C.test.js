import countBootPairs from "../C.js";

describe("2017 -> Fase 1 -> Botas trocadas", () => {

    test("Teste 1", () => {
        const boots = [
            { size: "40", foot: "D" },
            { size: "40", foot: "E" },
            { size: "41", foot: "D" },
            { size: "41", foot: "E" }

        ];

        const result = countBootPairs(boots);
        expect(result).toBe(2);
    });

    test("Teste 2", () => {
        const boots = [
           { size: '38', foot: 'E' },
           { size: '39', foot: 'E' },
           { size: '40', foot: 'D' },
           { size: '38', foot: 'D' },
           { size: '40', foot: 'D' },
           { size: '37', foot: 'E' }
]

        const result = countBootPairs(boots);
        expect(result).toBe(1);
    });

    test("Teste 3", () => {
        const boots = [
            { size: "39", foot: "D" },
            { size: "40", foot: "D" }
        ];

        const result = countBootPairs(boots);
        expect(result).toBe(0);
    });

});