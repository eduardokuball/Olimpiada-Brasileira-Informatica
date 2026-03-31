export default function getNextHalleyYear(year) {
    const period = 76;
    const lastAppearance = 1986;

    let nextYear = lastAppearance;

    while (nextYear <= year) {
        nextYear += period;
    }

    return nextYear;
}