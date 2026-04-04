import checkWeb from "../B.js";

describe("2005 -> Fase única -> Transmissão de energia", () => {

    test("Teste 1", () => {
        const stations = 6;
        const conections = [
                [ 1, 2 ], [ 2, 3 ],
                [ 3, 4 ], [ 4, 5 ],
                [ 5, 6 ], [ 6, 2 ],
                [ 1, 5 ]
                ]

        const result = checkWeb(stations, conections);

        expect(result).toBe("normal")
    });

    test("Teste 2", () => {
        const stations = 4;
        const conections = [ [ 1, 2 ], [ 4, 2 ], [ 1, 4 ] ];

        const result = checkWeb(stations, conections);

        expect(result).toBe("falha")

    })
})