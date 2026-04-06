function mostHeight(item, array = []) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] > item) return true;
    }
    return false;
}

function isFlooded(heights = [], i) {
    let flooded = false;

    if (i > 0 && i < heights.length - 1) {
        const left = heights.slice(0, i);
        const right = heights.slice(i + 1);

        if (mostHeight(heights[i], left) && mostHeight(heights[i], right)) {
            flooded = true;
        }
    }

    return flooded;
}

function floodedSections(heights = []) {
    let sectionsFlooded = 0;

    for (let i = 0; i < heights.length; i++) {
        if (isFlooded(heights, i)) sectionsFlooded++;
    }

    return sectionsFlooded;
}

export default function countFloodedSections(heights = []) {
    return floodedSections(heights);
}