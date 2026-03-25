import mostVisitedAirports from "../D.js";

describe("2002 -> Fase única -> Aeroporto", () => {

    test("Teste 1", () => {
        const flightsConnections = [1, 3, 2, 1, 3, 2,3, 4, 4, 5, 3, 5, 2, 5]   
        const result = mostVisitedAirports(flightsConnections);

        expect(result).toBe("3");
      
    })

    test("Teste 2", () => {
        const flightsConnections = [1, 3, 1, 2, 3,2, 1, 2, 2, 1]

        const result = mostVisitedAirports(flightsConnections);

        expect(result).toBe("1 2");
       
    })

    
})