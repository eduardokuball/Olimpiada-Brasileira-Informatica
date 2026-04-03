export default function calculateRotation(directions = []) {

    if (directions.includes('norte') && directions.includes('sul')) {
        return 180;
    }

    if (directions.includes('leste') && directions.includes('oeste')) {
        return 180;
    }

    if (directions[0] === directions[1]) {
        return 0;
    }

    return 90;
}