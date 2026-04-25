function compress(heights) {
    const group = [];
    heights.forEach(e => {
        if (e === group.at(-1)) return;
        group.push(e);
    });
    return group;
}

// Main Function
export default function constructionCompany(heights) {
    let group = compress(heights);
    let min = Math.min(...group);
    let counter = 0;

    while (!group.every(e => e === min)) {
        group[group.indexOf(min)]++;
        group = compress(group);
        counter++;
        min = Math.min(...group);
    }

    return counter;
}
