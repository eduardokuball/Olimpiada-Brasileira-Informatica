import decryptPhrase from '../B.js';

describe("2014 -> Fase 1 -> Língua do P", () => {

    test("Teste 1", () => {
        const result = decryptPhrase([ 'pUpm', 'pfpiplpmpe', 'plpepgpapl' ]);
        expect(result).toBe("Um filme legal");
    });

    test("Teste 2", () => {
        const result = decryptPhrase([ 'pA', 'pppapppa', 'pdpo', 'pPpapppa' ]);
        expect(result).toBe("A papa do Papa");
    });

});