export default function countContractions(values) {

    const array = [null, ...values];

    let changes = 0;
    let i = 1;

    while (i < array.length - 1) {
        if (array[i] !== array[array.length - i]) {

            if (array[i] < array[array.length - i]) {
                array[i] += array[i + 1];
                array.splice(i + 1, 1);

            } else {
                array[array.length - i - 1] += array[array.length - i];
                array.splice(array.length - i, 1);
            }

            changes++;

        } else {
            i++;
        }
    }

    return changes;
}