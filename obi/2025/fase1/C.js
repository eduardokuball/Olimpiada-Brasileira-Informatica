export default function countHiddenStudents(queue) {
    const reversed = [...queue].reverse();

    let hiddenStudents = 0;
    let maxHeight = reversed[0];

    for (let i = 1; i < reversed.length; i++) {
        if (reversed[i] <= maxHeight) {
            hiddenStudents++;
        } else {
            maxHeight = reversed[i];
        }
    }

    return hiddenStudents;
}