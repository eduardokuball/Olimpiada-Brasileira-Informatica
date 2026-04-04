function lowestValues(matrix = [], lines, columns) {
    let values = [];

    for (let j = 0; j < columns; j++) {
        let valuesOfColumn = [];

        for (let i = 0; i < lines; i++) {
            valuesOfColumn.push(matrix[i][j]);
        }

        const sum = valuesOfColumn.reduce((acc, e) => acc + e, 0);
        values.push(sum);
    }

    return Math.min(...values);
}

export default function getLowestColumnSum(matrix = []) {
    const lines = matrix.length;
    const columns = matrix[0].length;

    return lowestValues(matrix, lines, columns);
}