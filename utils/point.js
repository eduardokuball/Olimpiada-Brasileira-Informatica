class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    // Comparison by x coordinate (for sorting)
    isLessThan(other) {
        return this.x < other.x;
    }
}

export default Point;