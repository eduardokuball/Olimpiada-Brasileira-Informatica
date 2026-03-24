export default function mergeIntervals(occupations) {

    occupations.sort((a, b) => a.start - b.start);

    const merged = [];

    occupations.forEach((o) => {
        if (merged.length === 0) {
            merged.push({ ...o });
        } else {
            const last = merged[merged.length - 1];

            if (last.end >= o.start) {
                last.end = Math.max(last.end, o.end);
            } else {
                merged.push({ ...o });
            }
        }
    });

    return merged;

}