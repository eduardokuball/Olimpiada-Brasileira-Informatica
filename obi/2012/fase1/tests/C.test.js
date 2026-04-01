import countUniqueStudents from '../C.js';

describe("2012 -> Fase 1 -> Frequência na aula", () => {

    test("Teste 1", () => {
        const presenceList = [0, 5, 12, 41, 7, 5, 41];

        const result = countUniqueStudents(presenceList);

        expect(result).toBe(5);
    });

    test("Teste 2", () => {
        const presenceList = [2,3,1];

        const result = countUniqueStudents(presenceList);

        expect(result).toBe(3);
    });

    test("Teste 3", () => {
        const presenceList = [1, 2, 3, 4, 5];

        const result = countUniqueStudents(presenceList);

        expect(result).toBe(5);
    });

});