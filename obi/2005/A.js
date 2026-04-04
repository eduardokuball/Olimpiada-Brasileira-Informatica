export default function solveGame(roundsData) {

    let aldo = 0;
    let beto = 0;

    roundsData.forEach(([n1, n2]) => {
        aldo += n1;
        beto += n2;
    });

    return aldo > beto ? 'Aldo' : 'Beto';
}