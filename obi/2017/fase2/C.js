export default function countSegments(heights) {
    const n = heights.length;

    let count = 2;
    let decreasing = false;

    for (let i = 1; i < n; i++) {
        if (heights[i] < heights[i - 1]) {
            decreasing = true;
        } else {
            if (decreasing) {
                count += 1;
            }
            decreasing = false;
        }
    }

    return count;
}