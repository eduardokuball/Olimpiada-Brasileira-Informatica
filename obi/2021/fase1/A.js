export default function determineGroup(results) {
    let winners = 0;

    for (const result of results) {
        if (result === "V") winners++;
    }

    if (winners >= 5) return 1;
    if (winners >= 3) return 2;
    if (winners >= 1) return 3;

    return -1;
}