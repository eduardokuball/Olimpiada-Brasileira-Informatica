import bestStudents from "../B.js";

describe("2003 -> Fase única -> Estágio", () => {

    test("Teste 1", () => {
        const report = [
            { student: 1, note: 85 },
            { student: 2, note: 91 },
            { student: 3, note: 73 }
            ];
    
        const result = bestStudents(report);

        expect(result).toBe("2")
    });

    test("Teste 2", () => {
        const report = [
            { student: 12300, note: 81 },
            { student: 12601, note: 99 },
            { student: 15023, note: 76 },
            { student: 10111, note: 99 },
            { student: 212, note: 99 }
            ]

        const result = bestStudents(report);

        expect(result).toBe("12601 10111 212")
    })
})