export default function buildLargestSequence(sequence) {
    const size = sequence.length;
    const possibilities = [];

    if (sequence.includes(0) || sequence.includes(5)) {
        let aux = [...sequence];

        for (let i = 0; i < size; i++) {
            if (aux[i] === 0 || aux[i] === 5) {
                [aux[i], aux[aux.length - 1]] = [aux[aux.length - 1], aux[i]];
                possibilities.push(parseInt(aux.join('')));
            }
            aux = [...sequence];
        }
    }

    if (possibilities.length === 0) {
        return -1;
    }

    const max = Math.max(...possibilities);

    return String(max)
        .split('')
        .map(Number);
}