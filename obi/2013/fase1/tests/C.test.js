import getMinimumPathSize from '../C.js';

describe("2013 -> Fase 1 -> Catálogo de Músicas", () => {

    test("Teste 1", () => {
        const paths = [
            "Rock/AngraCarryOn.mp3",
            "MPB/Caetano/Sampa.mp3",
            "MPB/Cartola/Alvorada.mp3"
        ];

        const result = getMinimumPathSize(paths);

        expect(result).toBe(59);
    });

    test("Teste 2", () => {
        const paths = [
            "Preferidas/chacoalha/uia.mp3",
            "Preferidas/chacoalha/eia.mp3"
        ];

        const result = getMinimumPathSize(paths);

        expect(result).toBe(14);
    });

    test("Teste 3", () => {
        const paths = [
            "delta/india/juliet/lima",
            "bravo/echo",
            "bravo/foxtrot",
            "charlie/hotel",
            "delta/india/kilo",
            "bravo/golf"
        ];

        const result = getMinimumPathSize(paths);

        expect(result).toBe(76);
    });

});