export default function classifyHeights(heights) {
    let replaced = 0;
    let repaired = 0;

    for (const h of heights) {
        if (h < 50) {
            replaced++;
        } else if (h < 85) {
            repaired++;
        }
    }

    return [replaced, repaired];
}