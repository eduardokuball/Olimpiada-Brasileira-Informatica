export default function getMostFrequentNote(grades = []) {

    const frequencyMap = new Map();

    for (const grade of grades) {
        frequencyMap.set(grade, (frequencyMap.get(grade) || 0) + 1);
    }

    let maxFrequency = 0;

    for (const freq of frequencyMap.values()) {
        if (freq > maxFrequency) {
            maxFrequency = freq;
        }
    }

    let bestNote = -Infinity;

    for (const [note, freq] of frequencyMap.entries()) {
        if (freq === maxFrequency) {
            if (note > bestNote) {
                bestNote = note;
            }
        }
    }

    return bestNote;
}