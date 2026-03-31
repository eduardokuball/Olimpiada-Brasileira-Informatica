export default function countVisibleStars(area, stars, frequencies) {
    let count = 0;
    const photons = 40000000;

    for (let i = 0; i < stars; i++) {
        const f = frequencies[i];

        if (f * area >= photons) {
            count++;
        }
    }

    return count;
}