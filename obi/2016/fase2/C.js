export default function isValidConfiguration(points) {
    const x = [0];
    const y = [0];

    for (const [xi, yi] of points) {
        x.push(xi);
        y.push(yi);
    }

    function distSquared(i, j) {
        return (x[i] - x[j]) ** 2 + (y[i] - y[j]) ** 2;
    }

    function cross(i, j, k) {
        return (x[j] - x[i]) * (y[k] - y[i]) - (x[k] - x[i]) * (y[j] - y[i]);
    }

    const c1 = distSquared(1, 2) + distSquared(1, 3) > distSquared(2, 3);
    const c2 = distSquared(1, 2) === distSquared(1, 3);
    const c3 = cross(2, 3, 4) === 0 && cross(2, 3, 5) === 0;
    const c4 = (x[2] + x[3]) === (x[4] + x[5]) && (y[2] + y[3]) === (y[4] + y[5]);
    const c5 = distSquared(2, 3) > distSquared(4, 5);
    const c6 =
        distSquared(2, 4) + distSquared(4, 6) === distSquared(2, 6) &&
        distSquared(3, 5) + distSquared(5, 7) === distSquared(3, 7);
    const c7 = distSquared(4, 6) === distSquared(5, 7);
    const c8 = cross(2, 3, 1) * cross(2, 3, 6) < 0;

    return (c1 && c2 && c3 && c4 && c5 && c6 && c7 && c8) ? 'S' : 'N';
}