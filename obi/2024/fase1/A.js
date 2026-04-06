export default function Ogro(left, right) {
    if (left > right) return right + left;
    return 2 * (right - left);
}