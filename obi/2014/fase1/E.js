export default function isStairMatrix(matrix = []) {
    const lines = matrix.length;
    const columns = matrix[0].length;

    let lastLeadingIndex = -1;

    for (let i = 0; i < lines; i++) {
        let firstNonZeroIndex = -1;

        for (let j = 0; j < columns; j++) {
            if (matrix[i][j] !== 0) {
                firstNonZeroIndex = j;
                break;
            }
        }

        if (firstNonZeroIndex !== -1) {
            if (firstNonZeroIndex <= lastLeadingIndex) {
                return "N";
            }
            lastLeadingIndex = firstNonZeroIndex;
        }
    }

    return "S";
}