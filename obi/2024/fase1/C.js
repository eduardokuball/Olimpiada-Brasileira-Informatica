function isUppercaseLetter(char) {
    return /^[A-Z]$/.test(char);
}

function isDigit(char) {
    return /^\d$/.test(char);
}

function isOldPlatePattern(plate) {
    if (plate.length !== 8) return false;

    const letters = plate.slice(0, 3).split('');
    const hyphen = plate[3] === '-';
    const numbers = plate.slice(4, 8).split('');

    const allLetters = letters.every(isUppercaseLetter);
    const allNumbers = numbers.every(isDigit);

    return allLetters && hyphen && allNumbers;
}

function isNewPlatePattern(plate) {
    if (plate.length !== 7) return false;

    const letters = plate.slice(0, 3).split('');
    const allLetters = letters.every(isUppercaseLetter);

    const fourth = isDigit(plate[3]);
    const fifth = isUppercaseLetter(plate[4]);
    const lastTwo = isDigit(plate[5]) && isDigit(plate[6]);

    return allLetters && fourth && fifth && lastTwo;
}

export default function getPlateType(plate) {
    if (isOldPlatePattern(plate)) return 1;
    if (isNewPlatePattern(plate)) return 2;
    return 0;
}