import countPeopleWaitingOver20 from '../D.js';

describe("2012 -> Fase 2 -> Banco", () => {

    test("Teste 1", () => {
        const cashiers = 1;

        const people = [
            { arrival: 0, duration: 10 },
            { arrival: 0, duration: 10 },
            { arrival: 1, duration: 10 },
            { arrival: 2, duration: 10 },
            { arrival: 30, duration: 10 }
        ];

        const result = countPeopleWaitingOver20(cashiers, people);

        expect(result).toBe(1);
    });

    test("Teste 2", () => {
        const cashiers = 3;

        const people = [
            { arrival: 0, duration: 10 },
            { arrival: 0, duration: 10 },
            { arrival: 0, duration: 10 },
            { arrival: 3, duration: 10 },
            { arrival: 5, duration: 10 },
            { arrival: 7, duration: 10 },
            { arrival: 11, duration: 10 },
            { arrival: 13, duration: 10 },
            { arrival: 14, duration: 10 },
            { arrival: 15, duration: 10 },
            { arrival: 16, duration: 10 },
            { arrival: 17, duration: 10 },
            { arrival: 18, duration: 3 },
            { arrival: 19, duration: 10 },
            { arrival: 20, duration: 10 },
            { arrival: 23, duration: 3 }
        ];

        const result = countPeopleWaitingOver20(cashiers, people);

        expect(result).toBe(2);
    });

});