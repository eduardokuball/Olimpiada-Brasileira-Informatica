import simulateWaterFlow from "../D.js";

describe("2019 -> Fase 1 -> ", () => {

    test("Teste 1", () => {
        const result = simulateWaterFlow([
            ".......o......",
            ".###...####.#.",
            "..............",
            "..######......",
            "..............",
            ".#.####....##.",
            "..............",
            ".....####.....",
            ".............."
        ]);

        expect(result).toEqual([
            "......oooooo..",
            ".###..o####o#.",
            ".oooooooo..o..",
            ".o######o..o..",
            "ooo.....o.oooo",
            "o#o####.o.o##o",
            "o.o.ooooooo..o",
            "o.o.o####oo..o",
            "o.o.o....oo..o"
        ]);
    });

    test("Teste 2", () => {
        const result = simulateWaterFlow([
            ".o...",
            ".#...",
            ".....",
            ".....",
            ".....",
            "..#..",
            "....."
        ]);

        expect(result).toEqual([
            "ooo..",
            "o#o..",
            "o.o..",
            "o.o..",
            "oooo.",
            "oo#o.",
            "oo.o."
        ]);
    });

    test("Teste 3", () => {
        const result = simulateWaterFlow([
            "..o",
            ".#.",
            "..."
        ]);

        expect(result).toEqual([
            "..o",
            ".#o",
            "..o"
        ]);
    });

});