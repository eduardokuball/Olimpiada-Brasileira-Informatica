export default function isMovementPossible(n, l1, c1, l2, c2) {

    let isPossible = false;
    const half = n / 2;

    if ((l1 <= half && l2 > half) || (l1 > half && l2 <= half)) {
        isPossible = true;
    }

    if ((c1 <= half && c2 > half) || (c1 > half && c2 <= half)) {
        isPossible = true;
    }

    return isPossible ? "S" : "N";
}