export default function getWinner(chocoball, maximum) {

    const MAX_SIZE = chocoball + maximum + 5;
    const count = Array(MAX_SIZE).fill(0);
    const forbidden = Array(MAX_SIZE).fill(0);

    for (let i = 0; i <= chocoball; i++) {
        if (count[i] === 0) {
            for (let j = 1; j <= maximum; j++) {
                count[i + j] += 1;
                forbidden[i + j] = j;
            }
        }

        if (count[i] === 1) {
            count[i + forbidden[i]] += 1;
            forbidden[i + forbidden[i]] = forbidden[i];
        }
    }

    return count[chocoball] === 0 ? "Carlos" : "Paula";
}