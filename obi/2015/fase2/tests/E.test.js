import processQueueOperations from "../E.js";

describe("2015 -> Fase 2 -> Fila", () => {

    test("Teste 1", () => {
        const n = 5;
        const fila = [10 ,5 ,7 ,8 ,2];
        const operations = [
            [ 1, 5, 6 ],
            [ 0, 1, 11 ],
            [ 1, 6, 6 ],
            [ 0, 0, 13 ],
            [ 1, 6, 4 ],
            [ 1, 6, 5 ]
            ]

        const result = processQueueOperations(fila, operations);

        expect(result).toEqual([1,2,1,0]);
    });

});