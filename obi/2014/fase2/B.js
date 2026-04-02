export default function getMaxArea(tube, carpet) {

    if (tube < carpet) return 0;

    const ones = carpet - 1;
    const last = tube - ones;

    return ones * 1 + (last * last);
}