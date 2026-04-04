import countWaysToPay from '../E.js';

describe("2015 -> Fase 1 -> ", () => {

    test("Teste 1", () => {
        const target = 22;
        const notes = [5 ,4 ,3 ,10, 0 ,10]; 

        const result = countWaysToPay(target, notes);

        expect(result).toBe(4);
    });

    test("Teste 2", () => {
        const target = 1000;
        const notes = [20 ,20 ,20 ,20 ,20 ,20];

        const result = countWaysToPay(target, notes);

        expect(result).toBe(34201);
    });

});