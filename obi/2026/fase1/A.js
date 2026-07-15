// Main Function
export default function fingers(fingersList = []) {
    const FINGER_VALUES = [16, 8, 4, 2, 1];
    let sum = 0;

    fingersList.forEach((f, i) => {
        if (f === 0) return;
        sum += FINGER_VALUES[i];
    });

    return sum;
}
