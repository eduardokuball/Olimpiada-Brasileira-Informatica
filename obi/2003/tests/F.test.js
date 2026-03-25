import rankPlayers from "../F.js";

describe("2003 -> Fase única -> Tetris", () => {

   test("Teste 1", () => {
     const playersData = [{
                player: 'Zezinho',
                results: [
                            100, 123, 133, 333,
                            400, 300, 129, 200,
                            360, 340, 200, 600
                            ]
            },
            {
                player: 'Luizinho',
                results: [
                60,  50, 120, 250,
                170, 190, 190, 220,
                260, 270, 290, 300
                ]
            },
            {
                player: 'Carlinhos',
                results: [
                10, 10, 20, 10, 10,
                10, 10, 20, 20, 20,
                20, 20
                ]
            },
            {
                player: 'Joaozinho',
                results: [
                200, 300, 400, 400,
                500, 500, 500, 600,
                650, 650, 700, 810
                ]
            }
        ]

        const result = rankPlayers(playersData);

        expect(result).toEqual([
        '1 Joaozinho 5200',
        '2 Zezinho 2518',
        '3 Luizinho 2020',
        '4 Carlinhos 150'
        ]);
   });

   test("Teste 2", () => {
        const playersData = [
            {
                player: 'Pedrinho',
                results: [
                100, 100, 200, 200,
                300, 300, 400, 400,
                500, 500, 600, 600
                ]
            },
            {
                player: 'Huguinho',
                results: [
                50, 100, 200, 200,
                300, 300, 500, 500,
                400, 400, 600, 700
                ]
            },
            {
                player: 'Zezinho',
                results: [
                100, 100, 100, 100,
                100, 100, 100, 100,
                100, 100, 100, 100
                ]
            }
            ]
        
        const result = rankPlayers(playersData);

        expect(result).toEqual([ '1 Huguinho 3500', '2 Pedrinho 3500', '3 Zezinho 1000' ])
   })
})