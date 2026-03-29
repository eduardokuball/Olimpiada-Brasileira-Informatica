export default function findSeat(rows, columns, firstClass, position) {
    const totalSeats = (rows - firstClass + 1) * columns;

    if (position > totalSeats) return "PROXIMO VOO";

    const row = firstClass + Math.floor((position - 1) / columns);
    const col = (position - 1) % columns;

    const letter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[col];

    return `${row} ${letter}`;
}