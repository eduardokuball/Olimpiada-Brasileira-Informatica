import countMusicChanges from "../D.js";

describe("020 -> Fase 1 -> Música para todos", () => {

    test("Teste 1", () => {
        const result = countMusicChanges(
            [
                { beloved: 1, hated: 2 },
                { beloved: 2, hated: 3 },
                { beloved: 3, hated: 2 }
            ],
            2
        );
        expect(result).toBe(1);
    });

    test("Teste 2", () => {
        const result = countMusicChanges(
            [
                { beloved: 1, hated: 3 },
                { beloved: 2, hated: 3 },
                { beloved: 3, hated: 2 },
                { beloved: 5, hated: 1 }
            ],
            2
        );
        expect(result).toBe(3);
    });

    test("Teste 3", () => {
        const result = countMusicChanges(
            [
                { beloved: 1, hated: 2 },
                { beloved: 2, hated: 3 },
                { beloved: 3, hated: 1 }
            ],
            1
        );
        expect(result).toBe(-1);
    });

});